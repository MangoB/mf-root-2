import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

// Import loader page
import mainLoader from "./loader/mainLoader.html";

// Set HTMLLayoutData for send to the router
const data = {
  loaders: {
    mainLoader,
  },
  props: {},
};

// Send HTMLLayoutData into the router for use in a layout file
const routes = constructRoutes(microfrontendLayout, data);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    // Just "return System.import(name)" is enough
    // But I want to show a loader around 2 second
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(System.import(name));
      }, 2000);
    });
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
