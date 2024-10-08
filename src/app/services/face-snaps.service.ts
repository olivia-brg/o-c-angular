import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "app/models/snap-type.type";

@Injectable({
    providedIn: "root"
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
          `Quelqu'un`,
          `Je ne sais pas qui c'est`,
          `https://i.pinimg.com/736x/31/bf/7a/31bf7a7610110a92d5554fa442538efa.jpg`,
          new Date,
          5
        ),
        new FaceSnap(
          `Moi`,
          `J'aime bien cette photo`,
          `https://media.licdn.com/dms/image/v2/D4D03AQE_2Iuw379tMA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725310131824?e=1730937600&v=beta&t=kDfwHrEN6JJ9BMG3IjzSLQTOlbrs3yWXOA0zH6wkXx0`,
          new Date,
          125
        ).setLocation("chez moi")
    ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!foundFaceSnap) {
            throw new Error("FaceSnap not found!"); 
        }
        return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, snapType : SnapType): void {
        const FaceSnap = this.getFaceSnapById(faceSnapId);
        foundFaceSnap.snap(snapType);
    }
}