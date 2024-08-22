import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "./AuthContext";
import { toast } from "react-hot-toast";

const DataContext = createContext();

export default DataContext;

export const DataProvider = ({ children }) => {
  //states i want to keep
  const { user, token, shouldKick } = useAuthContext();
  const [cachedRoute, setCachedRoute] = useState("");
  const [refetchHelp, setRefetchHelp] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState([]);

  const getNotifications = async () => {
    const response = await getRequest(`notifications/all`);

    if (response.message === "success") {
      const result = response.data;
      result.length > 0 && setNotifications(result);
    }
    else {
      toast.error("Something went wrong");
    }
  };

  const getUnreadNotifications = async () => {
    const response = await getRequest(`notifications/unread`);

    if (response.message === "success") {
      const result = response.data;
      result.length > 0 && setUnreadNotifications(result);
    }
    else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (user) {
      getNotifications();
      getUnreadNotifications();
    }
  }, []);

  const markAllNotificationsAsRead = async () => {
    const response = await postRequestFeedback(`notifications/mark-as-read`);

    if (response.message === "success") {
      setUnreadNotifications([]);
    }
  };

  const handleRefetchHelp = () => {
    setRefetchHelp(!refetchHelp);
  }

  const [globalSwitch, setGlobalSwitch] = useState(false);

  const handleGlobalSwitch = (bool) => {
    setGlobalSwitch(bool);
  }

  const handleCachedRoute = (route) => {
    setCachedRoute(route);
  };

  const handleFileUpload = async (e, validTypes, size = 1100000) => {
    let imgObj = e.target.files[0];
    if (validTypes) {
      if (!validTypes.includes(imgObj.type)) {
        toast.error("Invalid file type")
        return false;
      }
    }
    if (imgObj.size > size) {
      toast.error("Maximum file size is 1mb");
      return false;
    }
    const formdata = new FormData();
    formdata.append("image", imgObj);
    toast.loading("uploading image...");
    const result = await postRequest("public-upload", formdata);
    if (result.status === "success") {
      toast.dismiss();
      toast.success("upload successful");
      return result.imageName;
    } else {
      toast.dismiss();
      toast.error("upload failed");
      return false;
    }
  };

  // const handleExternalFileUpload = async (e, validTypes, size, route) => {
  //   console.log(route);
  //   let imgObj = e.target.files[0];
  //   if (validTypes) {
  //     if (!validTypes.includes(imgObj.type)) {
  //       toast.error("Invalid file type")
  //       return false;
  //     }
  //   }
  //   if (imgObj.size > size) {
  //     toast.error("Maximum file size is 1mb");
  //     return false;
  //   }
  //   const formdata = new FormData();
  //   formdata.append("image", imgObj);
  //   toast.loading("uploading image...");
  //   const result = await postExternalRequestFeedback(`${route}`, formdata);
  //   return result;
  // };

  const handleMultipleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    e.target.value = '';
    const oversizedFiles = files.filter(file => file.size > 1100000);
    if (oversizedFiles.length > 0) {
      toast.error("Maximum file size is 1mb");
      return; // Exit function if any file exceeds the size limit
    }
    // Create FormData object
    const formdata = new FormData();

    // Append all files to the FormData object under the key "images[]"
    files.forEach(file => {
      formdata.append('images[]', file);
    });

    // Display loading message
    toast.loading("Uploading images...");

    try {
      // Send POST request to upload the files
      const result = await postRequest("public-upload-multiple", formdata);

      // Check the result of the upload
      if (result.status === "success") {
        toast.success("Upload successful");
        console.log(result.images);
        return result.images;
      } else {
        toast.error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      toast.error("Upload failed");
    } finally {
      // Dismiss loading message
      toast.dismiss();
    }
  };

  const deleteRequest = (route, id) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}/${id}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return true;
      })
      .catch((err) => {
        shouldKick(err);
        return false;
      });
  };

  const getRequest = (route) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        shouldKick(err);
        return false;
      });
  };

  const getRequestCustom = (route, customHeaders) => {
    const url = route;
    return axios
      .get(url, {
        headers: customHeaders,
      })
      .then((response) => {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        // shouldKick(err);
        return err;
      });
  };

  const showRequest = (route, id) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}/${id}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        shouldKick(err);
        return false;
      });
  };

  const postRequest = (route, data) => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_SERVER_URL}/${route}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch(function (e) {
        console.log(e.response.data.message);
        shouldKick(e);
        return false;
      });
  };

  const postRequestFeedback = (route, data) => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_SERVER_URL}/${route}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch(function (e) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(e.response.data.message);
        shouldKick(e);
        return e.response.data;
      });
  };

  const postExternalRequestFeedback = (route, data) => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${route}`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch(function (e) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(e.response.data.message);
        shouldKick(e);
        return e.response.data;
      });
  };

  let contextData = {
    deleteRequest,
    getRequest,
    getRequestCustom,
    postRequest,
    postRequestFeedback,
    postExternalRequestFeedback,
    showRequest,
    cachedRoute,
    handleCachedRoute,
    refetchHelp,
    handleRefetchHelp,
    globalSwitch,
    handleGlobalSwitch,
    handleFileUpload,
    handleMultipleFileUpload,
    notifications: notifications,
    unreadNotifications: unreadNotifications,
    markAllNotificationsAsRead: markAllNotificationsAsRead
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);