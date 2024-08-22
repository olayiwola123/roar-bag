import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fixTypesInObject, generateQueryString } from "../utils/Helpers";
import Loading from "../components/General/Loading";
import { useDataContext } from "./DataContext";
import toast from "react-hot-toast";

const FilterContext = createContext();

export default FilterContext;

export const FilterProvider = ({ children }) => {
  const { postRequest } = useDataContext();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get query parameters from the URL
  const currency = queryParams.get("currency");
  const tbd = queryParams.get("tbd");
  const category = queryParams.get("category");
  const car_make = queryParams.get("car_make");
  const fuel_type = queryParams.get("fuel_type");
  const transmission = queryParams.get("transmission");
  const min_seats = queryParams.get("min_seats");
  const max_seats = queryParams.get("max_seats");
  const min_rate = queryParams.get("min_rate");
  const max_rate = queryParams.get("max_rate");
  const address = queryParams.get("address");
  const place_id = queryParams.get("place_id");

  const [queryObj, setQueryObj] = useState({
    currency: currency,
    tbd: tbd,
    category: category,
    car_make: car_make,
    fuel_type: fuel_type,
    transmission: transmission,
    min_seats: min_seats,
    max_seats: max_seats,
    min_rate: min_rate,
    max_rate: max_rate,
    address: address,
    place_id: place_id,
  });

  const handleChangeObj = (name, value) => {
    setQueryObj({ ...queryObj, [name]: value });
  };

  const [price, setPrice] = useState([
    parseFloat(queryObj.min_rate) || 0,
    parseFloat(queryObj.max_rate) || 1000000,
  ]);

  const handlePrice = () => {
    setQueryObj({ ...queryObj, min_rate: price[0], max_rate: price[1] });
  };

  // Function to handle changes in seats
  const [seats, setSeats] = useState([
    parseInt(queryObj.min_seats) || 0,
    parseInt(queryObj.max_seats) || 10,
  ]);

  const handleSeats = () => {
    setQueryObj({ ...queryObj, min_seats: seats[0], max_seats: seats[1] });
  };

  // Navigate function to apply the filters and update the URL
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log(data);
  }, [data])
  
  const filterCourses = async () => {
    setLoading(true);
    const result = await postRequest(`filter`, fixTypesInObject(queryObj));
    if (result.status === "success") {
      // setCategories(result.categories);
      setData(result.data.data);
    } else {
      toast.error("Unable to get information");
    }
    setLoading(false);
  };

  const resetAll = () => {
    setQueryObj({
      currency: null,
      tbd: null,
      category: null,
      car_make: null,
      fuel_type: null,
      transmission: null,
      min_seats: null,
      max_seats: null,
      min_rate: null,
      max_rate: null,
      address: null,
      place_id: null,
    });
  };

  useEffect(() => {
    console.log(queryObj);
    navigate(`?${generateQueryString(queryObj)}`);
    filterCourses();
  }, [queryObj]);

  let contextData = {
    data,
    queryObj,
    setQueryObj,
    handleChangeObj,
    price,
    setPrice,
    handlePrice,
    resetAll,
  };

  return (
    <FilterContext.Provider value={contextData}>
      { loading && <Loading/>}
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
