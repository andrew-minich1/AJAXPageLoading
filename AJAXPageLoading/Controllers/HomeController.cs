using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AJAXPageLoading.Models;

namespace AJAXPageLoading.Controllers
{
    public class HomeController : Controller
    {
        private List<Country> countries;

        public HomeController ()
        {
            countries = new List<Country>();
            countries.Add(new Country { Id = 1, Name = "Belarus", Сapital = "Minsk" });
            countries.Add(new Country { Id = 2, Name = "Spain", Сapital = "Madrid" });
            countries.Add(new Country { Id = 3, Name = "Russia", Сapital = "Moscow" });
            countries.Add(new Country { Id = 4, Name = "Italy", Сapital = "Rome" });
            countries.Add(new Country { Id = 5, Name = "France", Сapital = "Paris" });
        }
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ShowSecondView ()
        {
            return View("SecondView", countries);
        }

    }
}
