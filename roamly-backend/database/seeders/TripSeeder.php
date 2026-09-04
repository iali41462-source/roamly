<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TripSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('trips')->upsert(
            [
                [
                    'id' => 5,
                    'destination_id' => 3,
                    'title' => 'Paris Romantic Escape',
                    'location' => 'Europe',
                    'duration' => '5 Days / 4 Nights',
                    'price' => 1890.00,
                    'description' => 'Explore the Eiffel Tower, Louvre Museum, charming Parisian streets and beautiful cafés on an unforgettable European getaway.',
                    'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
                ],

                [
                    'id' => 6,
                    'destination_id' => 4,
                    'title' => 'Santorini Sunset Escape',
                    'location' => 'Europe',
                    'duration' => '6 Days / 5 Nights',
                    'price' => 2190.00,
                    'description' => "Enjoy Santorini's whitewashed villages, blue-domed buildings, stunning sunsets and spectacular Aegean Sea views.",
                    'image' => 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
                ],

                [
                    'id' => 7,
                    'destination_id' => 5,
                    'title' => 'Swiss Alps Adventure',
                    'location' => 'Mountains',
                    'duration' => '7 Days / 6 Nights',
                    'price' => 2490.00,
                    'description' => 'Experience breathtaking alpine landscapes, mountain villages, scenic train journeys and unforgettable adventures in Switzerland.',
                    'image' => 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
                ],

                [
                    'id' => 8,
                    'destination_id' => 6,
                    'title' => 'Bali Tropical Escape',
                    'location' => 'Asia',
                    'duration' => '7 Days / 6 Nights',
                    'price' => 1590.00,
                    'description' => 'Discover tropical beaches, ancient temples, lush rice terraces and the vibrant culture of beautiful Bali.',
                    'image' => 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
                ],

                [
                    'id' => 9,
                    'destination_id' => 7,
                    'title' => 'Tokyo City Discovery',
                    'location' => 'Asia',
                    'duration' => '6 Days / 5 Nights',
                    'price' => 2290.00,
                    'description' => "Experience Tokyo's fascinating mix of traditional Japanese culture, modern architecture, incredible food and vibrant city life.",
                    'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
                ],

                [
                    'id' => 10,
                    'destination_id' => 8,
                    'title' => 'Maldives Paradise Retreat',
                    'location' => 'Islands',
                    'duration' => '5 Days / 4 Nights',
                    'price' => 2790.00,
                    'description' => 'Relax among crystal-clear waters, tropical beaches and beautiful coral reefs during a peaceful island getaway.',
                    'image' => 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                ],

                [
                    'id' => 11,
                    'destination_id' => 9,
                    'title' => 'New York City Explorer',
                    'location' => 'Americas',
                    'duration' => '5 Days / 4 Nights',
                    'price' => 2190.00,
                    'description' => 'Explore Times Square, Central Park, famous museums, iconic landmarks and the energetic neighborhoods of New York City.',
                    'image' => 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee',
                ],

                [
                    'id' => 12,
                    'destination_id' => 10,
                    'title' => 'Banff Mountain Adventure',
                    'location' => 'Mountains',
                    'duration' => '6 Days / 5 Nights',
                    'price' => 2390.00,
                    'description' => "Discover Canada's Rocky Mountains, turquoise lakes, dramatic peaks and spectacular outdoor landscapes.",
                    'image' => 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce',
                ],

                [
                    'id' => 13,
                    'destination_id' => 11,
                    'title' => 'Hawaii Island Escape',
                    'location' => 'Islands',
                    'duration' => '7 Days / 6 Nights',
                    'price' => 2690.00,
                    'description' => 'Enjoy beautiful beaches, volcanic landscapes, ocean adventures and the unique culture of the Hawaiian Islands.',
                    'image' => 'https://images.unsplash.com/photo-1505220390361-6d8c1e7c4a98',
                ],

                [
                    'id' => 14,
                    'destination_id' => 12,
                    'title' => 'Zermatt Alpine Escape',
                    'location' => 'Mountains',
                    'duration' => '6 Days / 5 Nights',
                    'price' => 2590.00,
                    'description' => 'Explore the charming mountain town of Zermatt and enjoy spectacular views of the Matterhorn and surrounding Alps.',
                    'image' => 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95',
                ],
            ],
            ['id'],
            [
                'destination_id',
                'title',
                'location',
                'duration',
                'price',
                'description',
                'image',
            ]
        );

        // PostgreSQL sequence ko correct next ID par set karta hai
        DB::statement("
            SELECT setval(
                pg_get_serial_sequence('trips', 'id'),
                (SELECT MAX(id) FROM trips)
            )
        ");
    }
}
