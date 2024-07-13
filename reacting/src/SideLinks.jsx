
function SideLinks() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-start">
        <div className="bg-blue-500 text-white p-4 rounded-t-lg mb-0">Block 1</div>
        <div className="bg-green-500 text-white p-4 mb-0">Block 2</div>
        <div className="bg-red-500 text-white p-4 rounded-b-lg mb-0">Block 3</div>
      </div>
    </div>
  )
}

export default SideLinks