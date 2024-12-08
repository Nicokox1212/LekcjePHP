const routes = [
    {
      path: "/",
      name: "Home",
      component: "Home",
    },
    {
      path: "/about",
      name: "About",
      component: "About",
    },
    {
      path: "/contact",
      name: "Contact",
      component: "Contact",
    },
    {
      path: "/notes",
      name: "Notes",
      component: "Notes",
    },
    {
      path: "/profile/:id",
      name: "Profile",
      component: "Profile",
      hidden: true
    },
  ];
  
  export default routes;
  