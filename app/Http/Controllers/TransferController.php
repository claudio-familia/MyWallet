<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transfer;
use App\Wallet;

class TransferController extends Controller
{
    public function store(Request $request){

        $wallet = Wallet::find($request->wallet_id);
        $transfer = new Transfer();       
        // $transfer->description = '$request->description';
        // $transfer->amount = 0;
        // $transfer->wallet_id = 1;
        $transfer->description = $request->description;
        $transfer->amount = $request->amount;
        $transfer->wallet_id = $request->wallet_id;
        $transfer->save();

        $wallet->money = $wallet->money + $request->amount;
        $wallet->update();


        return response()->json($transfer, 201);

    }
}
