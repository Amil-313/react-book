import React from "react"
import ContentLoader from "react-content-loader"

const Loading = (props) => (
  <ContentLoader 
    speed={2}
    width={200}
    height={450}
    viewBox="0 0 200 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="200" height="300" /> 
    <rect x="23" y="314" rx="4" ry="4" width="150" height="22" /> 
    <rect x="0" y="351" rx="0" ry="0" width="150" height="36" /> 
    <rect x="0" y="404" rx="0" ry="0" width="92" height="41" /> 
    <rect x="111" y="404" rx="5" ry="5" width="30" height="30" /> 
    <rect x="159" y="404" rx="5" ry="5" width="30" height="30" />
  </ContentLoader>
)

export default Loading