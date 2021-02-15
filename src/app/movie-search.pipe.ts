import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieSearch'
})
export class MovieSearchPipe implements PipeTransform {

  transform(allMovies : any , userWord : any): any {
    if(userWord == "")
      {
        return allMovies;
      }
      else
      {
        return allMovies.filter(function(oneMovie : any){
          if(oneMovie.media_type === "tv")
          {
            return oneMovie.original_name.includes(userWord) || oneMovie.overview.includes(userWord);
          }
          else{
            return oneMovie.title.includes(userWord) || oneMovie.overview.includes(userWord);
          }
          
    
        })
    
      }
  }

}
