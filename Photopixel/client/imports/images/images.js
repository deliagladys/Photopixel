
import {Mongo} from 'meteor/mongo';

export const Images = new FS.Collection("images",{
	stores: [new FS.Store.FileSystem("media")]
});