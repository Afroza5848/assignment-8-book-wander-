
import { Link } from 'react-router-dom';
import banner from '../../assets/image/banner.png';

const Banner = () => {
    return (
            <div className="hero min-h-[70vh] rounded-2xl bg-base-200">
                <div className="hero-content flex-col gap-24 lg:flex-row-reverse">
                    <img src={banner} />
                    <div className='space-y-10'>
                        <h1 className="text-7xl font-bold play-fair mb-10">Books to freshen <br /> up your bookshelf</h1>

                      <Link to="/listedBooks"> <button className="px-6 py-3 rounded-md text-white text-xl font-bold bg-green-500">View The List</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Banner;