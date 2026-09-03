<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Destination;
use App\Models\Booking;
use Illuminate\Database\Eloquent\SoftDeletes;


class Trip extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'destination_id',
        'title',
        'location',
        'duration',
        'price',
        'description',
        'image',
    ];


    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }


    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
