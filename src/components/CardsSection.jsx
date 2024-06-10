import imgTv from '../assets/image.png';
function CardsSection() {
  return (
    <div className="my-5 w-[100%] ">
      <h2 className="">Top Categories Of The Month</h2>
      <hr className="mb-4"></hr>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <div className=" flex gap-5 border rounded w-[20rem] p-10">
          <img src={imgTv} alt="" />
          <div className="flex flex-col justify-center items-center">
            <p>Electronices</p>
            <p>TV Televisions</p>
            <p>Washing</p>
          </div>
        </div>
        <div className=" flex gap-5 border rounded w-[20rem] p-10">
          <img src={imgTv} alt="" />
          <div className="flex flex-col justify-center items-center">
            <p>Electronices</p>
            <p>TV Televisions</p>
            <p>Washing</p>
          </div>
        </div>
        <div className=" flex gap-5 border rounded w-[20rem] p-10">
          <img src={imgTv} alt="" />
          <div className="flex flex-col justify-center items-center">
            <p>Electronices</p>
            <p>TV Televisions</p>
            <p>Washing</p>
          </div>
        </div>
        <div className=" flex gap-5 border rounded w-[20rem] p-10">
          <img src={imgTv} alt="" />
          <div className="flex flex-col justify-center items-center">
            <p>Electronices</p>
            <p>TV Televisions</p>
            <p>Washing</p>
          </div>
        </div>
        <div className=" flex gap-5 border rounded w-[20rem] p-10">
          <img src={imgTv} alt="" />
          <div className="flex flex-col justify-center items-center">
            <p>Electronices</p>
            <p>TV Televisions</p>
            <p>Washing</p>
          </div>
        </div>
        <div className=" flex gap-5 border rounded w-[20rem] p-10">
          <img src={imgTv} alt="" />
          <div className="flex flex-col justify-center items-center">
            <p>Electronices</p>
            <p>TV Televisions</p>
            <p>Washing</p>
          </div>
        </div>
        <div className=" flex gap-5 border rounded w-[20rem] p-10">
          <img src={imgTv} alt="" />
          <div className="flex flex-col justify-center items-center">
            <p>Electronices</p>
            <p>TV Televisions</p>
            <p>Washing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
