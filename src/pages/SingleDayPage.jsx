import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { useNavigation } from "react-router-dom";
const SingleDayPage = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className=" flex gap-5">
      <Sidebar />
      {isLoading ? <Loader /> : <h1>Singlepages</h1>}
    </div>
  );
};

export default SingleDayPage;
