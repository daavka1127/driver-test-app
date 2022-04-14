<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lesson;
use Illuminate\Support\Facades\DB;

class LessonController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getLessons($cardId){
        try {
            $lessons = Lesson::where("lessons.card_id", "=", $cardId)
                ->get();

            return $lessons;
        } catch (\Throwable $th) {
            return response(
                array(
                    "status" => "error",
                    "msg" => "Серверийн алдаа. Веб мастерт хандана уу."
                ), 500
            );
        }
    }

    public function store(Request $req){
        try {
            $lesson = new Lesson();
            $lesson->card_id = $req->card_id;
            $lesson->name = $req->name;
            $lesson->save();
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
            $lesson = Lesson::find($req->id);
            $lesson->card_id = $req->card_id;
            $lesson->name = $req->name;
            $lesson->save();
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
            foreach ($req->ids as $key => $value) {
                $lesson = Lesson::find($value["id"]);
                $lesson->delete();
            }
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
