import axios from "axios";
import { useEffect, useState } from "react"

const useMainData = () => {
    const [mainData, setMainData] = useState([]);
    useEffect(() => {
        // fetch("localdata.json")
        fetch("http://localhost:5000/volunteerData")
        .then(res => res.json())
        .then(data => setMainData(data))
    }, [])
    return [mainData, setMainData];
}
export default useMainData;