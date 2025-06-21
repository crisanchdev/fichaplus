<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanAccion extends Model
{
    use HasFactory;

    protected $table = 'plan_accions';

    protected $fillable = [
        'cliente_id',
        'task',
        'due_date',
        'completed',
        'responsible'
    ];

    protected $casts = [
        'due_date' => 'date',
        'completed' => 'boolean'
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}
