
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router';
import CartContext from '../Provider/CartContext';

const PlantsDetails = () => {
    // const { id } = useParams()
    // const [plant, setPlant] = useState({})
    // useEffect(() => {
    //     axios(`https://openapi.programming-hero.com/api/plant/${id}`)
    //         .then(data => setPlant(data.data.plants))
    // }, [id])
    // console.log(plant);

    const location = useLocation()
    console.log(location);
    // const { data } = useLoaderData()
    const { image, name, description, price, category } = location.state

    const { carts, setCarts } = useContext(CartContext)

    const isExist = carts.find(item => item.id === location.state.id)
    const handleAddCart = () => {
        if (isExist) {
            alert('already added')
            return
        }
        setCarts((prev) => [...prev, location.state])
    }
    return (
        <div className='max-w-md mx-auto group'>
            <div className="card bg-white shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 rounded-3xl overflow-hidden">

                {/* Image Section with Overlay */}
                <figure className="relative h-64 overflow-hidden bg-gray-50">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                        <div className="badge badge-primary font-bold py-3 shadow-lg">{category}</div>
                    </div>
                </figure>

                <div className="card-body p-6">
                    {/* Title and Price Row */}
                    <div className="flex justify-between items-start gap-2">
                        <h2 className="card-title text-2xl font-bold text-gray-800 leading-tight">
                            {name}
                        </h2>
                        <div className="text-xl font-bold text-green-600 whitespace-nowrap">
                            ৳{price}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm line-clamp-3 mt-2 leading-relaxed">
                        {description}
                    </p>

                    {/* Actions */}
                    <div className="card-actions justify-between items-center mt-6 pt-4 border-t border-gray-50">
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                            Available Now
                        </span>
                        <button
                            disabled={isExist}
                            onClick={handleAddCart}
                            className={`btn btn-md rounded-2xl px-8 font-bold transition-all duration-300 ${isExist
                                    ? 'btn-disabled bg-gray-100 text-gray-400'
                                    : 'btn-primary shadow-lg hover:shadow-primary/30 hover:-translate-y-1'
                                }`}
                        >
                            {isExist ? (
                                <span className="flex items-center gap-2">
                                    Added
                                </span>
                            ) : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantsDetails;