"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rootFolder = {
    id: '832bdc17-6c1f-4a19-b898-3b449d77f3af',
    name: '/',
    parentId: null,
    files: [
        {
            title: 'This is a file',
            content: 'At the root level',
        },
    ],
    nestedFolderIds: [
        '40e71101-bd72-40f5-9050-018f260e723a',
        '07272e2e-fd19-4694-acbf-c76c99ed7afc',
    ],
};
var documentsFolder = {
    id: '40e71101-bd72-40f5-9050-018f260e723a',
    name: 'Documents',
    parentId: '832bdc17-6c1f-4a19-b898-3b449d77f3af',
    files: [
        {
            title: 'Document 1',
            content: 'This is my first document',
        },
        {
            title: 'Document 2',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: [
        '62b107a6-455b-407c-b5b6-6cfd9fdd198f',
        '6cdb00c8-225f-45da-92b6-cd24e18a895e',
    ],
};
var downloadsFolder = {
    id: '07272e2e-fd19-4694-acbf-c76c99ed7afc',
    name: 'Downloads',
    parentId: '832bdc17-6c1f-4a19-b898-3b449d77f3af',
    files: [
        {
            title: 'First download',
            content: 'This is my first download',
        },
    ],
    nestedFolderIds: [],
};
var workFolder = {
    id: '62b107a6-455b-407c-b5b6-6cfd9fdd198f',
    name: 'Work',
    parentId: '40e71101-bd72-40f5-9050-018f260e723a',
    files: [
        {
            title: 'First Note',
            content: 'This is my first note',
        },
        {
            title: 'Second Note',
            content: 'This is my second note',
        },
    ],
    nestedFolderIds: ['bc93e677-f1ea-4892-bd78-081f33fd5bfc'],
};
var workMeetingsFolder = {
    id: 'bc93e677-f1ea-4892-bd78-081f33fd5bfc',
    name: 'Meetings',
    parentId: '62b107a6-455b-407c-b5b6-6cfd9fdd198f',
    files: [
        {
            title: 'First doc',
            content: 'This is my first document',
        },
        {
            title: 'Second doc',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: [],
};
var businessFolder = {
    id: '6cdb00c8-225f-45da-92b6-cd24e18a895e',
    name: 'Business',
    parentId: '40e71101-bd72-40f5-9050-018f260e723a',
    files: [
        {
            title: 'First doc',
            content: 'This is my first document',
        },
        {
            title: 'Second doc',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: ['4861757c-24e2-4642-a937-4824403c6aa2'],
};
var tshirtBusinessFolder = {
    id: '4861757c-24e2-4642-a937-4824403c6aa2',
    name: 'TShirt Business',
    parentId: '6cdb00c8-225f-45da-92b6-cd24e18a895e',
    files: [
        {
            title: 'First doc',
            content: 'This is my first document',
        },
        {
            title: 'Second doc',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: [
        '33d55dd5-9d90-4d7c-beaf-cc110e93868b',
        'eb4b0cca-e1c4-4c03-9181-a6844f13ce8c',
    ],
};
var marketingFolder = {
    id: '33d55dd5-9d90-4d7c-beaf-cc110e93868b',
    name: 'Marketing',
    parentId: '4861757c-24e2-4642-a937-4824403c6aa2',
    files: [
        {
            title: 'First doc',
            content: 'This is my first document',
        },
        {
            title: 'Second doc',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: [
        'ab34ea7b-b9de-4137-ae75-c14536f90d05',
        '897540ce-1858-4530-a4da-9380a8e5c620',
        'a0dba457-c16c-41f1-b556-6845f3a913b5',
    ],
};
var salesFolder = {
    id: 'eb4b0cca-e1c4-4c03-9181-a6844f13ce8c',
    name: 'Sales',
    parentId: '4861757c-24e2-4642-a937-4824403c6aa2',
    files: [
        {
            title: 'First doc',
            content: 'This is my first document',
        },
        {
            title: 'Second doc',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: [
        '3369642c-c1b1-4bd8-b476-41cd007a82bd',
        'afa411fa-5e08-43fb-976a-0bcca86a559f',
    ],
};
var localSales = {
    id: 'afa411fa-5e08-43fb-976a-0bcca86a559f',
    name: 'Local Sales',
    parentId: 'eb4b0cca-e1c4-4c03-9181-a6844f13ce8c',
    files: [
        {
            title: 'First doc',
            content: 'This is my first document',
        },
        {
            title: 'Second doc',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: [],
};
var internationalSales = {
    id: '3369642c-c1b1-4bd8-b476-41cd007a82bd',
    name: 'International Sales',
    parentId: 'eb4b0cca-e1c4-4c03-9181-a6844f13ce8c',
    files: [
        {
            title: 'First doc',
            content: 'This is my first document',
        },
        {
            title: 'Second doc',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: [],
};
var socialMediaMarketing = {
    id: 'ab34ea7b-b9de-4137-ae75-c14536f90d05',
    name: 'Social Media',
    parentId: '33d55dd5-9d90-4d7c-beaf-cc110e93868b',
    files: [
        {
            title: 'First doc',
            content: 'This is my first document',
        },
        {
            title: 'Second doc',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: [],
};
var printMarketing = {
    id: '897540ce-1858-4530-a4da-9380a8e5c620',
    name: 'Print',
    parentId: '33d55dd5-9d90-4d7c-beaf-cc110e93868b',
    files: [
        {
            title: 'First doc',
            content: 'This is my first document',
        },
        {
            title: 'Second doc',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: [],
};
var copywriting = {
    id: 'a0dba457-c16c-41f1-b556-6845f3a913b5',
    name: 'Copywriting',
    parentId: '33d55dd5-9d90-4d7c-beaf-cc110e93868b',
    files: [
        {
            title: 'First doc',
            content: 'This is my first document',
        },
        {
            title: 'Second doc',
            content: 'This is my second document',
        },
    ],
    nestedFolderIds: [],
};
var foldersArr = [
    rootFolder,
    documentsFolder,
    downloadsFolder,
    workFolder,
    workMeetingsFolder,
    businessFolder,
    tshirtBusinessFolder,
    marketingFolder,
    salesFolder,
    localSales,
    internationalSales,
    socialMediaMarketing,
    printMarketing,
    copywriting,
];
exports.default = foldersArr;
