import { Component, OnInit } from '@angular/core';
import { DropDownServise } from '../../common/services/dropdown.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/redux/state/app.state';
import { LoadStudents } from 'src/app/redux/actions/students.action';
import { DataService } from 'src/app/common/services/data.service';
import { TreeviewItem } from 'ngx-treeview/src/treeview-item';
import { TreeviewConfig } from 'ngx-treeview/src/treeview-config';
import { Subject } from 'src/app/common/entities/subject';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit {
  public dropdownEnabled = true;
  public items: TreeviewItem[] = [];
  public values: number[];
  public buttonClass = 'btn-outline-secondary';
  public config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: false,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  constructor(private service: DropDownServise) {}

  ngOnInit() {
    if (!this.items.length) {
      this.service.getSubjects().subscribe(
        s =>
          (this.items = s.map(
            el =>
              new TreeviewItem({
                text: el.subject,
                value: el.id,
                collapsed: true,
                children: Object.keys(el.marks).map(e => ({
                  text: e.toString(),
                  value: e + ' ' + el.subject,
                  checked: false
                }))
              })
          ))
      );
    }
  }

  onSelectedChange(a) {
    console.log(a);
  }
}
