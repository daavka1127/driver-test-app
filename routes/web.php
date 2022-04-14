<?php

use App\Http\Controllers\DriveTypeController;
use App\Http\Controllers\CardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\TitleController;
use Illuminate\Support\Facades\Auth;



Auth::routes();

Route::get("/123", function(){
    // return "AA";
    return view("admin");
});

Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});

// Drive type routes
Route::get("/get/drive/type", [DriveTypeController::class, "getDriveType"]);
Route::post("/new/drive/type", [DriveTypeController::class, "store"]);
Route::post("/edit/drive/type", [DriveTypeController::class, "edit"]);
Route::post("/delete/drive/type", [DriveTypeController::class, "delete"]);

// Card routes
Route::get("/get/card", [CardController::class, "getCards"]);
Route::post("/new/card", [CardController::class, "store"]);
Route::post("/edit/card", [CardController::class, "edit"]);
Route::post("/delete/card", [CardController::class, "delete"]);
Route::get("/get/card/{cardId}", [CardController::class, "getCardById"]);

// Lesson routes
Route::get("/get/lessons/{cardId}", [LessonController::class, "getLessons"]);
Route::post("/new/lesson", [LessonController::class, "store"]);
Route::post("/edit/lesson", [LessonController::class, "edit"]);
Route::post("/delete/lesson", [LessonController::class, "delete"]);

// Title routes
Route::get("/get/titles/{lessonID}", [TitleController::class, "getTitles"]);
Route::post("/new/title", [TitleController::class, "store"]);
Route::post("/edit/title", [TitleController::class, "edit"]);
Route::post("/delete/title", [TitleController::class, "delete"]);

Route::any('/123/{catchall}', function(){
    return view('admin');
})->where('catchall', '.*');

Route::any('{catchall}', function(){
    return view('layouts.mainApp');
})->where('catchall', '.*');
