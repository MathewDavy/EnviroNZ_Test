using Microsoft.AspNetCore.Mvc;

namespace aspnet_back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SuburbsController : ControllerBase
    {


        [HttpGet]
        public string Get(float longitude, float latitude)
        {
            float smallestLatAndLongDiff = float.PositiveInfinity;
            string currentSuburb = "";
            // Import the json file of suburbs
            // For each suburb 
                // find the absolute difference between the passed in longitude and the the suburb's longitude 
                // Do the same for the latitude
                // Add the 2 together
                // Keep track of the smallest value by doing a min comparison with smallestLatAndLongDiff and storing the current suburb in currentSuburb
            // Return currentSuburb
        }
    }
}
