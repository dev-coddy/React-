# React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Imgae Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differntial Bundling - support older browers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Build for dev and production bundles

# Food Ordering App

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - Restaurant Container
- - Restaurant Card
- Footer
- - Copyright
- - Links
- - Address
- - Contact

# Export, Import

- Default Export/Import :

  - export default Component;
  - import Component from "path";

- Named Export/Import :
  - export const CDN_LINK = "abcd";
  - import {CDN_LINK} from "path";

# useEffect(callback(), dependency array[])

- Every time the component is called useEffect() is called
- if no dependency array > useEffect() is called on every render
- if empty dependency array > useEffect() is called once after the initial render
- dependency [btnName] is on btnName > useEffect() is called when btnName changes

# 2 types of Routing in web applications

- Client Side Routing
- Server Side Routing
