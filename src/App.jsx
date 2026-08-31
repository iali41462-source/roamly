import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Trips from "./pages/Trips";
import TripDetails from "./pages/TripDetails";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
    return (
        <BrowserRouter>

            <Routes>
                <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />

                

                <Route path="/destinations" element={<Destinations />}/>

                <Route path="/destinations/:destinationId" element={<DestinationDetails/> }/>

                <Route path="/trips" element={<Trips />} />

                <Route path="/trips/:tripId" element={<TripDetails />}/>
                
                <Route element={<ProtectedRoute />}>

                        <Route path="/booking/:tripId" element={<Booking />}/>

                        <Route path="/my-bookings" element={<MyBookings />}/>

                 </Route>
                

                {/* <Route path="/booking/:tripId" element={<Booking />}/>
                
                <Route path="/my-bookings" element={<MyBookings />}/> */}

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />}/>

                </Route>
                 <Route path="/signup" element={<Signup />}/>
                <Route path="/login" element={<Login />} />

            </Routes>
               

        </BrowserRouter>
    );
}

export default App;