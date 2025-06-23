<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $table = 'clientes';

    protected $fillable = [
        'name',
        'rut',
        'address',
        'phone',
        'email',
        'birth_date',
        'gender',
        'points',
        'diagnosis'
    ];

    protected $casts = [
        'birth_date' => 'date',
        'points' => 'array'
    ];

    public function planAccions()
    {
        return $this->hasMany(PlanAccion::class);
    }

    public function documentos()
    {
        return $this->hasMany(Documento::class);
    }
}
