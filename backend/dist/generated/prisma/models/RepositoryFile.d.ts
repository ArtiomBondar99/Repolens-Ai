import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RepositoryFileModel = runtime.Types.Result.DefaultSelection<Prisma.$RepositoryFilePayload>;
export type AggregateRepositoryFile = {
    _count: RepositoryFileCountAggregateOutputType | null;
    _avg: RepositoryFileAvgAggregateOutputType | null;
    _sum: RepositoryFileSumAggregateOutputType | null;
    _min: RepositoryFileMinAggregateOutputType | null;
    _max: RepositoryFileMaxAggregateOutputType | null;
};
export type RepositoryFileAvgAggregateOutputType = {
    size: number | null;
};
export type RepositoryFileSumAggregateOutputType = {
    size: number | null;
};
export type RepositoryFileMinAggregateOutputType = {
    id: string | null;
    repositoryId: string | null;
    path: string | null;
    sha: string | null;
    size: number | null;
    createdAt: Date | null;
};
export type RepositoryFileMaxAggregateOutputType = {
    id: string | null;
    repositoryId: string | null;
    path: string | null;
    sha: string | null;
    size: number | null;
    createdAt: Date | null;
};
export type RepositoryFileCountAggregateOutputType = {
    id: number;
    repositoryId: number;
    path: number;
    sha: number;
    size: number;
    createdAt: number;
    _all: number;
};
export type RepositoryFileAvgAggregateInputType = {
    size?: true;
};
export type RepositoryFileSumAggregateInputType = {
    size?: true;
};
export type RepositoryFileMinAggregateInputType = {
    id?: true;
    repositoryId?: true;
    path?: true;
    sha?: true;
    size?: true;
    createdAt?: true;
};
export type RepositoryFileMaxAggregateInputType = {
    id?: true;
    repositoryId?: true;
    path?: true;
    sha?: true;
    size?: true;
    createdAt?: true;
};
export type RepositoryFileCountAggregateInputType = {
    id?: true;
    repositoryId?: true;
    path?: true;
    sha?: true;
    size?: true;
    createdAt?: true;
    _all?: true;
};
export type RepositoryFileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepositoryFileWhereInput;
    orderBy?: Prisma.RepositoryFileOrderByWithRelationInput | Prisma.RepositoryFileOrderByWithRelationInput[];
    cursor?: Prisma.RepositoryFileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RepositoryFileCountAggregateInputType;
    _avg?: RepositoryFileAvgAggregateInputType;
    _sum?: RepositoryFileSumAggregateInputType;
    _min?: RepositoryFileMinAggregateInputType;
    _max?: RepositoryFileMaxAggregateInputType;
};
export type GetRepositoryFileAggregateType<T extends RepositoryFileAggregateArgs> = {
    [P in keyof T & keyof AggregateRepositoryFile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRepositoryFile[P]> : Prisma.GetScalarType<T[P], AggregateRepositoryFile[P]>;
};
export type RepositoryFileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepositoryFileWhereInput;
    orderBy?: Prisma.RepositoryFileOrderByWithAggregationInput | Prisma.RepositoryFileOrderByWithAggregationInput[];
    by: Prisma.RepositoryFileScalarFieldEnum[] | Prisma.RepositoryFileScalarFieldEnum;
    having?: Prisma.RepositoryFileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RepositoryFileCountAggregateInputType | true;
    _avg?: RepositoryFileAvgAggregateInputType;
    _sum?: RepositoryFileSumAggregateInputType;
    _min?: RepositoryFileMinAggregateInputType;
    _max?: RepositoryFileMaxAggregateInputType;
};
export type RepositoryFileGroupByOutputType = {
    id: string;
    repositoryId: string;
    path: string;
    sha: string;
    size: number | null;
    createdAt: Date;
    _count: RepositoryFileCountAggregateOutputType | null;
    _avg: RepositoryFileAvgAggregateOutputType | null;
    _sum: RepositoryFileSumAggregateOutputType | null;
    _min: RepositoryFileMinAggregateOutputType | null;
    _max: RepositoryFileMaxAggregateOutputType | null;
};
export type GetRepositoryFileGroupByPayload<T extends RepositoryFileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RepositoryFileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RepositoryFileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RepositoryFileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RepositoryFileGroupByOutputType[P]>;
}>>;
export type RepositoryFileWhereInput = {
    AND?: Prisma.RepositoryFileWhereInput | Prisma.RepositoryFileWhereInput[];
    OR?: Prisma.RepositoryFileWhereInput[];
    NOT?: Prisma.RepositoryFileWhereInput | Prisma.RepositoryFileWhereInput[];
    id?: Prisma.StringFilter<"RepositoryFile"> | string;
    repositoryId?: Prisma.StringFilter<"RepositoryFile"> | string;
    path?: Prisma.StringFilter<"RepositoryFile"> | string;
    sha?: Prisma.StringFilter<"RepositoryFile"> | string;
    size?: Prisma.IntNullableFilter<"RepositoryFile"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"RepositoryFile"> | Date | string;
    repository?: Prisma.XOR<Prisma.RepositoryScalarRelationFilter, Prisma.RepositoryWhereInput>;
};
export type RepositoryFileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    repositoryId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    sha?: Prisma.SortOrder;
    size?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    repository?: Prisma.RepositoryOrderByWithRelationInput;
};
export type RepositoryFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    repositoryId_path?: Prisma.RepositoryFileRepositoryIdPathCompoundUniqueInput;
    AND?: Prisma.RepositoryFileWhereInput | Prisma.RepositoryFileWhereInput[];
    OR?: Prisma.RepositoryFileWhereInput[];
    NOT?: Prisma.RepositoryFileWhereInput | Prisma.RepositoryFileWhereInput[];
    repositoryId?: Prisma.StringFilter<"RepositoryFile"> | string;
    path?: Prisma.StringFilter<"RepositoryFile"> | string;
    sha?: Prisma.StringFilter<"RepositoryFile"> | string;
    size?: Prisma.IntNullableFilter<"RepositoryFile"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"RepositoryFile"> | Date | string;
    repository?: Prisma.XOR<Prisma.RepositoryScalarRelationFilter, Prisma.RepositoryWhereInput>;
}, "id" | "repositoryId_path">;
export type RepositoryFileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    repositoryId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    sha?: Prisma.SortOrder;
    size?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RepositoryFileCountOrderByAggregateInput;
    _avg?: Prisma.RepositoryFileAvgOrderByAggregateInput;
    _max?: Prisma.RepositoryFileMaxOrderByAggregateInput;
    _min?: Prisma.RepositoryFileMinOrderByAggregateInput;
    _sum?: Prisma.RepositoryFileSumOrderByAggregateInput;
};
export type RepositoryFileScalarWhereWithAggregatesInput = {
    AND?: Prisma.RepositoryFileScalarWhereWithAggregatesInput | Prisma.RepositoryFileScalarWhereWithAggregatesInput[];
    OR?: Prisma.RepositoryFileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RepositoryFileScalarWhereWithAggregatesInput | Prisma.RepositoryFileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RepositoryFile"> | string;
    repositoryId?: Prisma.StringWithAggregatesFilter<"RepositoryFile"> | string;
    path?: Prisma.StringWithAggregatesFilter<"RepositoryFile"> | string;
    sha?: Prisma.StringWithAggregatesFilter<"RepositoryFile"> | string;
    size?: Prisma.IntNullableWithAggregatesFilter<"RepositoryFile"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RepositoryFile"> | Date | string;
};
export type RepositoryFileCreateInput = {
    id?: string;
    path: string;
    sha: string;
    size?: number | null;
    createdAt?: Date | string;
    repository: Prisma.RepositoryCreateNestedOneWithoutFilesInput;
};
export type RepositoryFileUncheckedCreateInput = {
    id?: string;
    repositoryId: string;
    path: string;
    sha: string;
    size?: number | null;
    createdAt?: Date | string;
};
export type RepositoryFileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    sha?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repository?: Prisma.RepositoryUpdateOneRequiredWithoutFilesNestedInput;
};
export type RepositoryFileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repositoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    sha?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositoryFileCreateManyInput = {
    id?: string;
    repositoryId: string;
    path: string;
    sha: string;
    size?: number | null;
    createdAt?: Date | string;
};
export type RepositoryFileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    sha?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositoryFileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repositoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    sha?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositoryFileListRelationFilter = {
    every?: Prisma.RepositoryFileWhereInput;
    some?: Prisma.RepositoryFileWhereInput;
    none?: Prisma.RepositoryFileWhereInput;
};
export type RepositoryFileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RepositoryFileRepositoryIdPathCompoundUniqueInput = {
    repositoryId: string;
    path: string;
};
export type RepositoryFileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repositoryId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    sha?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RepositoryFileAvgOrderByAggregateInput = {
    size?: Prisma.SortOrder;
};
export type RepositoryFileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repositoryId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    sha?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RepositoryFileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repositoryId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    sha?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RepositoryFileSumOrderByAggregateInput = {
    size?: Prisma.SortOrder;
};
export type RepositoryFileCreateNestedManyWithoutRepositoryInput = {
    create?: Prisma.XOR<Prisma.RepositoryFileCreateWithoutRepositoryInput, Prisma.RepositoryFileUncheckedCreateWithoutRepositoryInput> | Prisma.RepositoryFileCreateWithoutRepositoryInput[] | Prisma.RepositoryFileUncheckedCreateWithoutRepositoryInput[];
    connectOrCreate?: Prisma.RepositoryFileCreateOrConnectWithoutRepositoryInput | Prisma.RepositoryFileCreateOrConnectWithoutRepositoryInput[];
    createMany?: Prisma.RepositoryFileCreateManyRepositoryInputEnvelope;
    connect?: Prisma.RepositoryFileWhereUniqueInput | Prisma.RepositoryFileWhereUniqueInput[];
};
export type RepositoryFileUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: Prisma.XOR<Prisma.RepositoryFileCreateWithoutRepositoryInput, Prisma.RepositoryFileUncheckedCreateWithoutRepositoryInput> | Prisma.RepositoryFileCreateWithoutRepositoryInput[] | Prisma.RepositoryFileUncheckedCreateWithoutRepositoryInput[];
    connectOrCreate?: Prisma.RepositoryFileCreateOrConnectWithoutRepositoryInput | Prisma.RepositoryFileCreateOrConnectWithoutRepositoryInput[];
    createMany?: Prisma.RepositoryFileCreateManyRepositoryInputEnvelope;
    connect?: Prisma.RepositoryFileWhereUniqueInput | Prisma.RepositoryFileWhereUniqueInput[];
};
export type RepositoryFileUpdateManyWithoutRepositoryNestedInput = {
    create?: Prisma.XOR<Prisma.RepositoryFileCreateWithoutRepositoryInput, Prisma.RepositoryFileUncheckedCreateWithoutRepositoryInput> | Prisma.RepositoryFileCreateWithoutRepositoryInput[] | Prisma.RepositoryFileUncheckedCreateWithoutRepositoryInput[];
    connectOrCreate?: Prisma.RepositoryFileCreateOrConnectWithoutRepositoryInput | Prisma.RepositoryFileCreateOrConnectWithoutRepositoryInput[];
    upsert?: Prisma.RepositoryFileUpsertWithWhereUniqueWithoutRepositoryInput | Prisma.RepositoryFileUpsertWithWhereUniqueWithoutRepositoryInput[];
    createMany?: Prisma.RepositoryFileCreateManyRepositoryInputEnvelope;
    set?: Prisma.RepositoryFileWhereUniqueInput | Prisma.RepositoryFileWhereUniqueInput[];
    disconnect?: Prisma.RepositoryFileWhereUniqueInput | Prisma.RepositoryFileWhereUniqueInput[];
    delete?: Prisma.RepositoryFileWhereUniqueInput | Prisma.RepositoryFileWhereUniqueInput[];
    connect?: Prisma.RepositoryFileWhereUniqueInput | Prisma.RepositoryFileWhereUniqueInput[];
    update?: Prisma.RepositoryFileUpdateWithWhereUniqueWithoutRepositoryInput | Prisma.RepositoryFileUpdateWithWhereUniqueWithoutRepositoryInput[];
    updateMany?: Prisma.RepositoryFileUpdateManyWithWhereWithoutRepositoryInput | Prisma.RepositoryFileUpdateManyWithWhereWithoutRepositoryInput[];
    deleteMany?: Prisma.RepositoryFileScalarWhereInput | Prisma.RepositoryFileScalarWhereInput[];
};
export type RepositoryFileUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: Prisma.XOR<Prisma.RepositoryFileCreateWithoutRepositoryInput, Prisma.RepositoryFileUncheckedCreateWithoutRepositoryInput> | Prisma.RepositoryFileCreateWithoutRepositoryInput[] | Prisma.RepositoryFileUncheckedCreateWithoutRepositoryInput[];
    connectOrCreate?: Prisma.RepositoryFileCreateOrConnectWithoutRepositoryInput | Prisma.RepositoryFileCreateOrConnectWithoutRepositoryInput[];
    upsert?: Prisma.RepositoryFileUpsertWithWhereUniqueWithoutRepositoryInput | Prisma.RepositoryFileUpsertWithWhereUniqueWithoutRepositoryInput[];
    createMany?: Prisma.RepositoryFileCreateManyRepositoryInputEnvelope;
    set?: Prisma.RepositoryFileWhereUniqueInput | Prisma.RepositoryFileWhereUniqueInput[];
    disconnect?: Prisma.RepositoryFileWhereUniqueInput | Prisma.RepositoryFileWhereUniqueInput[];
    delete?: Prisma.RepositoryFileWhereUniqueInput | Prisma.RepositoryFileWhereUniqueInput[];
    connect?: Prisma.RepositoryFileWhereUniqueInput | Prisma.RepositoryFileWhereUniqueInput[];
    update?: Prisma.RepositoryFileUpdateWithWhereUniqueWithoutRepositoryInput | Prisma.RepositoryFileUpdateWithWhereUniqueWithoutRepositoryInput[];
    updateMany?: Prisma.RepositoryFileUpdateManyWithWhereWithoutRepositoryInput | Prisma.RepositoryFileUpdateManyWithWhereWithoutRepositoryInput[];
    deleteMany?: Prisma.RepositoryFileScalarWhereInput | Prisma.RepositoryFileScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type RepositoryFileCreateWithoutRepositoryInput = {
    id?: string;
    path: string;
    sha: string;
    size?: number | null;
    createdAt?: Date | string;
};
export type RepositoryFileUncheckedCreateWithoutRepositoryInput = {
    id?: string;
    path: string;
    sha: string;
    size?: number | null;
    createdAt?: Date | string;
};
export type RepositoryFileCreateOrConnectWithoutRepositoryInput = {
    where: Prisma.RepositoryFileWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepositoryFileCreateWithoutRepositoryInput, Prisma.RepositoryFileUncheckedCreateWithoutRepositoryInput>;
};
export type RepositoryFileCreateManyRepositoryInputEnvelope = {
    data: Prisma.RepositoryFileCreateManyRepositoryInput | Prisma.RepositoryFileCreateManyRepositoryInput[];
    skipDuplicates?: boolean;
};
export type RepositoryFileUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: Prisma.RepositoryFileWhereUniqueInput;
    update: Prisma.XOR<Prisma.RepositoryFileUpdateWithoutRepositoryInput, Prisma.RepositoryFileUncheckedUpdateWithoutRepositoryInput>;
    create: Prisma.XOR<Prisma.RepositoryFileCreateWithoutRepositoryInput, Prisma.RepositoryFileUncheckedCreateWithoutRepositoryInput>;
};
export type RepositoryFileUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: Prisma.RepositoryFileWhereUniqueInput;
    data: Prisma.XOR<Prisma.RepositoryFileUpdateWithoutRepositoryInput, Prisma.RepositoryFileUncheckedUpdateWithoutRepositoryInput>;
};
export type RepositoryFileUpdateManyWithWhereWithoutRepositoryInput = {
    where: Prisma.RepositoryFileScalarWhereInput;
    data: Prisma.XOR<Prisma.RepositoryFileUpdateManyMutationInput, Prisma.RepositoryFileUncheckedUpdateManyWithoutRepositoryInput>;
};
export type RepositoryFileScalarWhereInput = {
    AND?: Prisma.RepositoryFileScalarWhereInput | Prisma.RepositoryFileScalarWhereInput[];
    OR?: Prisma.RepositoryFileScalarWhereInput[];
    NOT?: Prisma.RepositoryFileScalarWhereInput | Prisma.RepositoryFileScalarWhereInput[];
    id?: Prisma.StringFilter<"RepositoryFile"> | string;
    repositoryId?: Prisma.StringFilter<"RepositoryFile"> | string;
    path?: Prisma.StringFilter<"RepositoryFile"> | string;
    sha?: Prisma.StringFilter<"RepositoryFile"> | string;
    size?: Prisma.IntNullableFilter<"RepositoryFile"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"RepositoryFile"> | Date | string;
};
export type RepositoryFileCreateManyRepositoryInput = {
    id?: string;
    path: string;
    sha: string;
    size?: number | null;
    createdAt?: Date | string;
};
export type RepositoryFileUpdateWithoutRepositoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    sha?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositoryFileUncheckedUpdateWithoutRepositoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    sha?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositoryFileUncheckedUpdateManyWithoutRepositoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    sha?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositoryFileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repositoryId?: boolean;
    path?: boolean;
    sha?: boolean;
    size?: boolean;
    createdAt?: boolean;
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["repositoryFile"]>;
export type RepositoryFileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repositoryId?: boolean;
    path?: boolean;
    sha?: boolean;
    size?: boolean;
    createdAt?: boolean;
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["repositoryFile"]>;
export type RepositoryFileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repositoryId?: boolean;
    path?: boolean;
    sha?: boolean;
    size?: boolean;
    createdAt?: boolean;
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["repositoryFile"]>;
export type RepositoryFileSelectScalar = {
    id?: boolean;
    repositoryId?: boolean;
    path?: boolean;
    sha?: boolean;
    size?: boolean;
    createdAt?: boolean;
};
export type RepositoryFileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "repositoryId" | "path" | "sha" | "size" | "createdAt", ExtArgs["result"]["repositoryFile"]>;
export type RepositoryFileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
};
export type RepositoryFileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
};
export type RepositoryFileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repository?: boolean | Prisma.RepositoryDefaultArgs<ExtArgs>;
};
export type $RepositoryFilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RepositoryFile";
    objects: {
        repository: Prisma.$RepositoryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        repositoryId: string;
        path: string;
        sha: string;
        size: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["repositoryFile"]>;
    composites: {};
};
export type RepositoryFileGetPayload<S extends boolean | null | undefined | RepositoryFileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload, S>;
export type RepositoryFileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RepositoryFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RepositoryFileCountAggregateInputType | true;
};
export interface RepositoryFileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RepositoryFile'];
        meta: {
            name: 'RepositoryFile';
        };
    };
    findUnique<T extends RepositoryFileFindUniqueArgs>(args: Prisma.SelectSubset<T, RepositoryFileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RepositoryFileClient<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RepositoryFileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RepositoryFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RepositoryFileClient<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RepositoryFileFindFirstArgs>(args?: Prisma.SelectSubset<T, RepositoryFileFindFirstArgs<ExtArgs>>): Prisma.Prisma__RepositoryFileClient<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RepositoryFileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RepositoryFileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RepositoryFileClient<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RepositoryFileFindManyArgs>(args?: Prisma.SelectSubset<T, RepositoryFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RepositoryFileCreateArgs>(args: Prisma.SelectSubset<T, RepositoryFileCreateArgs<ExtArgs>>): Prisma.Prisma__RepositoryFileClient<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RepositoryFileCreateManyArgs>(args?: Prisma.SelectSubset<T, RepositoryFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RepositoryFileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RepositoryFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RepositoryFileDeleteArgs>(args: Prisma.SelectSubset<T, RepositoryFileDeleteArgs<ExtArgs>>): Prisma.Prisma__RepositoryFileClient<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RepositoryFileUpdateArgs>(args: Prisma.SelectSubset<T, RepositoryFileUpdateArgs<ExtArgs>>): Prisma.Prisma__RepositoryFileClient<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RepositoryFileDeleteManyArgs>(args?: Prisma.SelectSubset<T, RepositoryFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RepositoryFileUpdateManyArgs>(args: Prisma.SelectSubset<T, RepositoryFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RepositoryFileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RepositoryFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RepositoryFileUpsertArgs>(args: Prisma.SelectSubset<T, RepositoryFileUpsertArgs<ExtArgs>>): Prisma.Prisma__RepositoryFileClient<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RepositoryFileCountArgs>(args?: Prisma.Subset<T, RepositoryFileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RepositoryFileCountAggregateOutputType> : number>;
    aggregate<T extends RepositoryFileAggregateArgs>(args: Prisma.Subset<T, RepositoryFileAggregateArgs>): Prisma.PrismaPromise<GetRepositoryFileAggregateType<T>>;
    groupBy<T extends RepositoryFileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RepositoryFileGroupByArgs['orderBy'];
    } : {
        orderBy?: RepositoryFileGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RepositoryFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RepositoryFileFieldRefs;
}
export interface Prisma__RepositoryFileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    repository<T extends Prisma.RepositoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RepositoryDefaultArgs<ExtArgs>>): Prisma.Prisma__RepositoryClient<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RepositoryFileFieldRefs {
    readonly id: Prisma.FieldRef<"RepositoryFile", 'String'>;
    readonly repositoryId: Prisma.FieldRef<"RepositoryFile", 'String'>;
    readonly path: Prisma.FieldRef<"RepositoryFile", 'String'>;
    readonly sha: Prisma.FieldRef<"RepositoryFile", 'String'>;
    readonly size: Prisma.FieldRef<"RepositoryFile", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"RepositoryFile", 'DateTime'>;
}
export type RepositoryFileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
    where: Prisma.RepositoryFileWhereUniqueInput;
};
export type RepositoryFileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
    where: Prisma.RepositoryFileWhereUniqueInput;
};
export type RepositoryFileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
    where?: Prisma.RepositoryFileWhereInput;
    orderBy?: Prisma.RepositoryFileOrderByWithRelationInput | Prisma.RepositoryFileOrderByWithRelationInput[];
    cursor?: Prisma.RepositoryFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepositoryFileScalarFieldEnum | Prisma.RepositoryFileScalarFieldEnum[];
};
export type RepositoryFileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
    where?: Prisma.RepositoryFileWhereInput;
    orderBy?: Prisma.RepositoryFileOrderByWithRelationInput | Prisma.RepositoryFileOrderByWithRelationInput[];
    cursor?: Prisma.RepositoryFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepositoryFileScalarFieldEnum | Prisma.RepositoryFileScalarFieldEnum[];
};
export type RepositoryFileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
    where?: Prisma.RepositoryFileWhereInput;
    orderBy?: Prisma.RepositoryFileOrderByWithRelationInput | Prisma.RepositoryFileOrderByWithRelationInput[];
    cursor?: Prisma.RepositoryFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepositoryFileScalarFieldEnum | Prisma.RepositoryFileScalarFieldEnum[];
};
export type RepositoryFileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepositoryFileCreateInput, Prisma.RepositoryFileUncheckedCreateInput>;
};
export type RepositoryFileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RepositoryFileCreateManyInput | Prisma.RepositoryFileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RepositoryFileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    data: Prisma.RepositoryFileCreateManyInput | Prisma.RepositoryFileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RepositoryFileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RepositoryFileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepositoryFileUpdateInput, Prisma.RepositoryFileUncheckedUpdateInput>;
    where: Prisma.RepositoryFileWhereUniqueInput;
};
export type RepositoryFileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RepositoryFileUpdateManyMutationInput, Prisma.RepositoryFileUncheckedUpdateManyInput>;
    where?: Prisma.RepositoryFileWhereInput;
    limit?: number;
};
export type RepositoryFileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepositoryFileUpdateManyMutationInput, Prisma.RepositoryFileUncheckedUpdateManyInput>;
    where?: Prisma.RepositoryFileWhereInput;
    limit?: number;
    include?: Prisma.RepositoryFileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RepositoryFileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
    where: Prisma.RepositoryFileWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepositoryFileCreateInput, Prisma.RepositoryFileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RepositoryFileUpdateInput, Prisma.RepositoryFileUncheckedUpdateInput>;
};
export type RepositoryFileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
    where: Prisma.RepositoryFileWhereUniqueInput;
};
export type RepositoryFileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepositoryFileWhereInput;
    limit?: number;
};
export type RepositoryFileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
};
