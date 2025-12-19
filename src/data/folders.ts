export interface FileNode {
  fileName: string;
  type: "file";
}

export interface FolderNode {
  folderName: string;
  type: "folder";
  children: Array<FileNode | FolderNode>;
}

export type Node = FileNode | FolderNode;

export const folders: FolderNode[] = [
  {
    folderName: "src",
    type: "folder",
    children: [
      {
        fileName: "About",
        type: "file",
      },
      {
        fileName: "Contact",
        type: "file",
      },
      {
        fileName: "Experience",
        type: "file",
      },
      {
        fileName: "Hero",
        type: "file",
      },
      {
        fileName: "Projects",
        type: "file",
      },
      {
        folderName: "etc",
        type: "folder",
        children: [
          {
            fileName: "Projects",
            type: "file",
          },
          {
            folderName: "etc",
            type: "folder",
            children: [
              {
                fileName: "Projects",
                type: "file",
              },
              {
                fileName: "Skills",
                type: "file",
              },
              {
                folderName: "etc",
                type: "folder",
                children: [
                  {
                    fileName: "Projects",
                    type: "file",
                  },
                  {
                    fileName: "Skills",
                    type: "file",
                  },
                  {
                    folderName: "etc",
                    type: "folder",
                    children: [
                      {
                        fileName: "Projects",
                        type: "file",
                      },
                      {
                        fileName: "Skills",
                        type: "file",
                      },
                      {
                        folderName: "etc",
                        type: "folder",
                        children: [
                          {
                            fileName: "Projects",
                            type: "file",
                          },
                          {
                            fileName: "Skills",
                            type: "file",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            fileName: "Skills",
            type: "file",
          },
        ],
      },
      {
        fileName: "Skills",
        type: "file",
      },
      {
        folderName: "etc",
        type: "folder",
        children: [
          {
            fileName: "Projects",
            type: "file",
          },
          {
            fileName: "Skills",
            type: "file",
          },
        ],
      },
    ],
  },
];
