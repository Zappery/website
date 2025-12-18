export default function Header() {

  return (
    <header className="bg-gray-800 text-white p-4 items-center flex justify-between">
      <h1 className="text-2xl font-bold">Matthew Soegiono</h1>

      <div className="space-x-4 inline-flex">
        <div> Home </div>
        <div> About </div>
        <div> Projects </div>
        <div> Contact </div>
      </div>
    </header>
  )
}