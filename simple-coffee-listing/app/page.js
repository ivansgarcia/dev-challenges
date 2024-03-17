import Image from 'next/image';
import Collection from './components/Collection';

export default function Home() {
    return (
        <div className="flex h-full min-h-screen flex-col items-center bg-black pb-20 md:pb-24 lg:pb-36">
            <Image
                priority
                className="absolute top-0 h-60 w-full object-cover"
                src="/images/bg-cafe.jpg"
                alt="background"
                width={2560}
                height={600}
            />
            <Collection />
        </div>
    );
}
