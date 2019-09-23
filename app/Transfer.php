<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    public function transfers(){
        return $this->belongsTo('App\Wallet');
    }
}
