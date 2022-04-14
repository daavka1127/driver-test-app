<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Title;

class TitleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getTitles($lessonId){
        try {
            $titles = Title::where("lesson_id", "=", $lessonId)
                ->get();

            return $titles;
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
            $title = new Title();
            $title->lesson_id = $req->lesson_id;
            $title->title = $req->title;
            $title->save();
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
                    "msg" => "Серверийн алдаа. Веб мастерт хандана уу."
                ), 500
            );
        }
    }

    public function edit(Request $req){
        try {
            $title = Title::find($req->id);
            $title->lesson_id = $req->lesson_id;
            $title->title = $req->title;
            $title->save();
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
                $lesson = Title::find($value["id"]);
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
