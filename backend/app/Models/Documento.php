<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    use HasFactory;

    protected $table = 'documentos';

    protected $fillable = [
        'cliente_id',
        'name',
        'type',
        'date'
    ];

    protected $casts = [
        'date' => 'date'
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}
