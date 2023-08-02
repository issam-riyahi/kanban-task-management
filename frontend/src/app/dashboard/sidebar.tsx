import ThemeSwitcher from "@/components/ThemeSwitcher"
import { AddBoardToggler, BoardToggler } from "@/components/taskBoardToggler";




const SideBar = ( ) => {


  return (
    <nav className="flex flex-col justify-between w-[300px] h-full border-r border-lines  py-8">
      <div className="boards">
          <h6 className="text-sm px-6">ALL BOARDS </h6>
          <div className="board-list mt-6">
            <BoardToggler taskName="test" />
            <AddBoardToggler />
          </div>
      </div>
      <div className="control px-6">
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default SideBar;