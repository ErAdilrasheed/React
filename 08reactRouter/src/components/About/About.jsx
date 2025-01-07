export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="./react.jpg" alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Imagine, if you will, the process of creating a beautiful mosaic.
              The artist, armed with a treasure trove of colorful tiles, must
              carefully place each piece to form a larger, cohesive picture.
              Similarly, React empowers developers to construct intricate web
              applications using "components," the building blocks of a React
              application. These components are akin to the individual tiles in
              a mosaic, each with its unique purpose and style, coming together
              to create the complete user interface.
            </p>
            <p className="mt-4 text-gray-600">
              React's genius lies in its ability to manage these components,
              ensuring that the masterpiece remains intact, even as individual
              tiles are added, removed, or changed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
