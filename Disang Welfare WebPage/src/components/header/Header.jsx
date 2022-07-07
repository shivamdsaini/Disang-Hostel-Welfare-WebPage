

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
       <h1 className="headerTitle">Heading</h1>
      <p className="headerdesc">Description</p>
      
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