<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DriveType;

class DriveTypeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getDriveType(){
        try {
            $driveTypes = DriveType::all();
            return $driveTypes;
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
            $driveType = new DriveType();
            $driveType->name = $req->name;
            $driveType->image = $req->image;
            $driveType->save();
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
            $driveType = DriveType::find($req->id);
            $driveType->name = $req->name;
            $driveType->image = $req->image;
            $driveType->save();
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
            $driveType = DriveType::find($req->id);
            $driveType->delete();
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
