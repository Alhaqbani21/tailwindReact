import chair from '../assets/chair1.png';
import img2 from '../assets/img2.png';
function ImageCard() {
  return (
    <div className="flex my-4 justify-center items-center w-[100%] max-md:flex-col max-md:gap-5 max-md:flex-wrap">
      <div className="bg-[#F8F8F8] h-[100%] flex justify-center items-center gap-10 mx-10 border">
        <div className="flex flex-col gap-10 ">
          <p className="justify-start tracking-widest w-20">
            WOODEN MINIMALISTC CHAIRS
          </p>
          <div>
            <p>SALE UP TO</p>
            <p className="text-green-700 text-xl">40% Off</p>
          </div>
          <div className="bg-[#FCB700] w-max px-4 py-1 rounded font-bold">
            Shop Now
          </div>
        </div>
        <img className="w-[50%]" src={chair} alt="" />
      </div>
    </div>
  );
}

export default ImageCard;
