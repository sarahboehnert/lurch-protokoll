import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabNavPanel } from '@angular/material/tabs';
import { Header } from './shared/header/header';
import { Nav } from './shared/nav/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Nav, MatTabNavPanel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
