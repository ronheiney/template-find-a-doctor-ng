import { Component } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { SelectedIndexChangedEventData, TabView } from "tns-core-modules/ui/tab-view";

@Component({
    selector: "RootComponent",
    moduleId: module.id,
    templateUrl: "./root.component.html",
    styleUrls: ["./root-common.css"]
})
export class RootComponent {
    title: string; 
    tabSelectedIndex: number;

    getIconSource(icon: string): string {
        return isAndroid ? "res://" + icon : "res://tabIcons/" + icon;
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        this.tabSelectedIndex = args.newIndex;
        const tabView = <TabView>args.object;
        const selectedTabViewItem = tabView.items[args.newIndex];

        this.title = selectedTabViewItem.title;
    }
}
