import { Component } from '@angular/core';
import { Header } from '../../components/common/header/header';
import { Video } from '../../components/about/video/video';
import { Whatis } from '../../components/about/whatis/whatis';
import { Members } from '../../components/about/members/members';
import { Footer } from '../../components/common/footer/footer';

@Component({
  selector: 'app-about',
  imports: [Header, Video, Whatis, Members, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
