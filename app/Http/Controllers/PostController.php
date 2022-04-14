<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getPostByLessonId($lessonId){
        $posts = Post::where("lesson_id", "=", $lessonId)
            ->get();
        return $posts;
    }

    public function store(Request $req){
        try {
            $posts = $this->getPostByLessonId($req->lesson_id);
            if(count($posts) > 0){
                Post::where("lesson_id", "=", "$req->lesson_id")
                    ->update([
                        "title" => $req->title,
                        "post" => $req->post
                    ]);
            }else{
                $post = new Post;
                $post->lesson_id = $req->lesson_id;
                $post->title = $req->title;
                $post->post = $req->post;
                $post->save();
            }
            return response(
                array(
                    "msg" => "Амжилттай хадгаллаа."
                ), 201
            );
        } catch (\Throwable $th) {
            return response(
                array(
                    "msg" => "Алдаа гарлаа. Веб мастерт хандана уу."
                ), 500
            );
        }
    }

    public function delete(Request $req){
        try {
            $deleted = Post::where('lesson_id', $req->lesson_id)->delete();
            return response(
                array(
                    "msg" => "Амжилттай устлаа."
                ), 200
            );
        } catch (\Throwable $th) {
            return response(
                array(
                    "msg" => "Алдаа гарлаа. Веб мастерт хандана уу."
                ), 500
            );
        }
    }
}
