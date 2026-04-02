
import { Link, useLoaderData } from 'react-router';

const PlantsDetails = () => {
    // const { id } = useParams()
    // const [plant, setPlant] = useState({})
    // useEffect(() => {
    //     axios(`https://openapi.programming-hero.com/api/plant/${id}`)
    //         .then(data => setPlant(data.data.plants))
    // }, [id])
    // console.log(plant);

    const { data } = useLoaderData()
    console.log(data.plants);
    const { image, name, description, price, category } = data.plants
    return (
        <div className='max-w-5xl mx-auto'>
            <div class="card bg-base-100  shadow-xl border border-gray-200">
                <figure class="px-4 pt-4">
                    <img
                        src={image}
                        alt={name}
                        class="rounded-xl h-56 w-full object-contain" />
                </figure>
                <div class="card-body">
                    <div class=" space-y-5">
                        <div>
                            <h2 class="card-title text-xl font-bold text-gray-800">{name}</h2>
                            <div class="badge badge-secondary badge-outline mt-1 italic text-xs">{category}</div>
                        </div>
                        {
                            description
                        }
                        <div class="text-lg font-semibold text-green-600">
                            Price: {price} tk
                        </div>
                    </div>
                    <div class="card-actions justify-end mt-4">
                        <Link class="btn btn-primary btn-sm px-6">Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantsDetails;