interface Props {
  visibility: any;
  types: any;
  graphics: any[];
}

function GraphicsComponents({ visibility, types, graphics }: Props) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {graphics.map((graphic, index) => (
          types === graphic.type ? (
          <div key={index} className="relative group">
            <div className="h-40 w-full sm:h-48 lg:h-56 xl:h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img
                src={graphic.image[0]}
                alt=""
                onClick={() => visibility(graphic)}
                className="h-full w-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
          ):null
        ))}
      </div>
    </div>
  );
}

export default GraphicsComponents;
