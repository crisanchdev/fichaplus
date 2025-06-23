<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('plan_accions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cliente_id')->constrained('clientes')->onDelete('cascade');
            $table->string('task');
            $table->date('due_date')->nullable();
            $table->boolean('completed')->default(false);
            $table->string('responsible')->default('Cliente');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('plan_accions');
    }
};

