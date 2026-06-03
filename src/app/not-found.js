import NotFoundAnimation from '@/components/NotFoundAnimation';
import Link from 'next/link';


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center justify-center">
                <NotFoundAnimation />
            </div>
            <div className="mt-8">
                <Link href="/">
                    <button className='btn bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition-colors'>
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
}