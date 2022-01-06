import Loader from "react-loader-spinner";
export default function Loading({width, height}){
  return(
    <Loader type="ThreeDots" color="#FFFFFF" height={height} width={width}/>
  );
}