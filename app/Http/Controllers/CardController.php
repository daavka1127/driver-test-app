<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Card;

class CardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getCards(){
        $cards = Card::all();
        return $cards;
    }

    public function getCardById($cardId) {
        try {
            $card = Card::find($cardId);
            if($card){
                return response($card, 200);
            }
            else{
                return response("Карт олдсонгүй", 500);
            }
        } catch (\Throwable $th) {
            return response("Серверийн алдаа. Веб мастерт хандана уу.", 500);
        }
    }

    public function store(Request $req){
        try {
            $card = new Card();
            $card->drive_type_id = $req->drive_type_id;
            $card->name = $req->name;
            $card->image = $req->image;
            $card->save();
            return response(
                array(
                    "status" => "success",
                    "msg" => "Амжилттай хадгаллаа."
                ), 200
            );
        } catch (\Throwable $th) {
            return response(
                array(
                    "status" => "error",
                    "msg" => "Алдаа гарлаа. Веб мастерт хандана уу."
                ), 500
            );
        }
    }

    public function edit(Request $req){
        try {
            $card = Card::find($req->id);
            $card->drive_type_id = $req->drive_type_id;
            $card->name = $req->name;
            $card->image = $req->image;
            $card->save();
            return response(
                array(
                    "status" => "success",
                    "msg" => "Амжилттай заслаа."
                ), 200
            );
        } catch (\Throwable $th) {
            return response(
                array(
                    "status" => "error",
                    "msg" => "Алдаа гарлаа. Веб мастерт хандана уу."
                ), 500
            );
        }
    }

    public function delete(Request $req){
        try {
            $card = Card::find($req->id);
            $card->delete();
            return response(
                array(
                    "status" => "success",
                    "msg" => "Амжилттай устлаа."
                ), 200
            );
        } catch (\Throwable $th) {
            return response(
                array(
                    "status" => "error",
                    "msg" => "Алдаа гарлаа. Веб мастерт хандана уу."
                ), 500
            );
        }
    }
}
