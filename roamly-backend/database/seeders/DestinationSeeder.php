<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DestinationSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('destinations')->upsert(
            [
                [
                    'id' => 3,
                    'name' => 'Paris',
                    'location' => 'Europe',
                    'description' => 'Discover the timeless beauty of Paris, from the Eiffel Tower and Louvre Museum to charming streets, cafés and unforgettable French experiences.',
                    'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
                ],

                [
                    'id' => 4,
                    'name' => 'Santorini',
                    'location' => 'Europe',
                    'description' => 'Experience the stunning Greek island of Santorini, famous for its whitewashed villages, blue domes, sunsets and beautiful Aegean views.',
                    'image' => 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
                ],

                [
                    'id' => 5,
                    'name' => 'Swiss Alps',
                    'location' => 'Mountains',
                    'description' => 'Explore breathtaking alpine landscapes, peaceful mountain villages and spectacular peaks across the Swiss Alps.',
                    'image' => 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
                ],

                [
                    'id' => 6,
                    'name' => 'Bali',
                    'location' => 'Asia',
                    'description' => "Discover Bali's tropical beaches, ancient temples, lush rice terraces and vibrant local culture.",
                    'image' => 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
                ],

                [
                    'id' => 7,
                    'name' => 'Tokyo',
                    'location' => 'Asia',
                    'description' => 'Experience the exciting contrast of traditional Japanese culture, modern architecture, incredible food and vibrant city life.',
                    'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
                ],

                [
                    'id' => 8,
                    'name' => 'Maldives',
                    'location' => 'Islands',
                    'description' => 'Relax in a tropical paradise surrounded by crystal-clear waters, beautiful coral reefs and peaceful private beaches.',
                    'image' => 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                ],

                [
                    'id' => 9,
                    'name' => 'New York City',
                    'location' => 'Americas',
                    'description' => 'Explore the energy of New York City, from Times Square and Central Park to world-class museums, restaurants and neighborhoods.',
                    'image' => 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee',
                ],

                [
                    'id' => 10,
                    'name' => 'Banff',
                    'location' => 'Mountains',
                    'description' => "Discover Canada's spectacular Rocky Mountains, turquoise lakes, dramatic peaks and unforgettable outdoor adventures.",
                    'image' => 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce',
                ],

                [
                    'id' => 11,
                    'name' => 'Hawaii',
                    'location' => 'Islands',
                    'description' => 'Enjoy volcanic landscapes, tropical beaches, ocean adventures and the unique culture of the Hawaiian Islands.',
                    'image' => 'https://images.unsplash.com/photo-1505220390361-6d8c1e7c4a98',
                ],

                [
                    'id' => 12,
                    'name' => 'Zermatt',
                    'location' => 'Mountains',
                    'description' => 'Visit the charming mountain town of Zermatt and enjoy spectacular views of the Matterhorn and surrounding Swiss Alps.',
                    'image' => 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95',
                ],
            ],
            ['id'],
            [
                'name',
                'location',
                'description',
                'image',
            ]
        );

        // PostgreSQL sequence ko correct next ID par set karta hai
        DB::statement("
            SELECT setval(
                pg_get_serial_sequence('destinations', 'id'),
                (SELECT MAX(id) FROM destinations)
            )
        ");
    }
}
