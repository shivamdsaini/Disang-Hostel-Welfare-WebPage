

import "./header.css";

const Header = ({type}) => {
 


  return (
    <div className="header">
      <div className={ type === "list" ? "headerContainer listMode" : "headerContainer"}>
      <div className="headerList">
        <div className="headerListItems">
       
        <span>Complaint</span>
        </div>
        <div className="headerListItems">
       
        <span>Notice Board</span>
        </div>
        <div className="headerListItems">
        
        <span>Girls</span>
        </div>
        <div className="headerListItems">
        {/* <FontAwesomeIcon icon={faBed} /> */}
        <span>Boys</span>
        </div>
        <div className="headerListItems">
        {/* <FontAwesomeIcon icon={faTaxi} /> */}
        <span>Gallery</span>
        </div>
        </div>
       <h1 className="headerTitle">Welcome to the website for Disang hostel welfare at IIT GUWAHATI</h1>
      <p className="headerdesc">You may find all the information you need right here to have a pleasant and pleasurable stay at our hostel, Disang. The Disang HMC hostel specific information (for men's and women's residences), information on exciting events going on, the Hostel Notice Board for quick access to important information, contact information for the hostel management, a map of the location, and a complain portal when things don't go right are all available here.
    <br/> <br/> During your visit, we hope you will find our website to be helpful.
</p>
      
      </div>

    </div>
  )
}

export default Header






// extra part just ignore it

// const [destination, setDestination] = useState("");
// const [openDate, setOpenDate] = useState(false);
// const [date, setDate] = useState([
//   {
//     startDate: new Date(),
//     endDate: new Date(),
//     key: "selection",
//   },
// ]);
// const [openOptions, setOpenOptions] = useState(false);
// const [options, setOptions] = useState({
//   adult: 1,
//   children: 0,
//   room: 1,
// });

// const navigate = useNavigate();

// const handleBtn = (name, operation) => {
//   setOptions((prev) => {
//     return {
//       ...prev,
//       [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
//     };
//   });
// };

// const handleSearch = () => {
//   navigate("/hotels", { state: { destination, date, options } });
// };
