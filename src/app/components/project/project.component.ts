import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  private subscription: any;
  private project: Project;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(params => {
      this.project = this.projectService.getOneProject(params.get('id'));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
