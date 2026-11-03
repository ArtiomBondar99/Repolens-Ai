import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CodeChunkModel = runtime.Types.Result.DefaultSelection<Prisma.$CodeChunkPayload>;
export type AggregateCodeChunk = {
    _count: CodeChunkCountAggregateOutputType | null;
    _avg: CodeChunkAvgAggregateOutputType | null;
    _sum: CodeChunkSumAggregateOutputType | null;
    _min: CodeChunkMinAggregateOutputType | null;
    _max: CodeChunkMaxAggregateOutputType | null;
};
export type CodeChunkAvgAggregateOutputType = {
    chunkIndex: number | null;
    startLine: number | null;
    endLine: number | null;
};
export type CodeChunkSumAggregateOutputType = {
    chunkIndex: number | null;
    startLine: number | null;
    endLine: number | null;
};
export type CodeChunkMinAggregateOutputType = {
    id: string | null;
    repositoryFileId: string | null;
    chunkIndex: number | null;
    content: string | null;
    startLine: number | null;
    endLine: number | null;
    createdAt: Date | null;
};
export type CodeChunkMaxAggregateOutputType = {
    id: string | null;
    repositoryFileId: string | null;
    chunkIndex: number | null;
    content: string | null;
    startLine: number | null;
    endLine: number | null;
    createdAt: Date | null;
};
export type CodeChunkCountAggregateOutputType = {
    id: number;
    repositoryFileId: number;
    chunkIndex: number;
    content: number;
    startLine: number;
    endLine: number;
    createdAt: number;
    _all: number;
};
export type CodeChunkAvgAggregateInputType = {
    chunkIndex?: true;
    startLine?: true;
    endLine?: true;
};
export type CodeChunkSumAggregateInputType = {
    chunkIndex?: true;
    startLine?: true;
    endLine?: true;
};
export type CodeChunkMinAggregateInputType = {
    id?: true;
    repositoryFileId?: true;
    chunkIndex?: true;
    content?: true;
    startLine?: true;
    endLine?: true;
    createdAt?: true;
};
export type CodeChunkMaxAggregateInputType = {
    id?: true;
    repositoryFileId?: true;
    chunkIndex?: true;
    content?: true;
    startLine?: true;
    endLine?: true;
    createdAt?: true;
};
export type CodeChunkCountAggregateInputType = {
    id?: true;
    repositoryFileId?: true;
    chunkIndex?: true;
    content?: true;
    startLine?: true;
    endLine?: true;
    createdAt?: true;
    _all?: true;
};
export type CodeChunkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CodeChunkWhereInput;
    orderBy?: Prisma.CodeChunkOrderByWithRelationInput | Prisma.CodeChunkOrderByWithRelationInput[];
    cursor?: Prisma.CodeChunkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CodeChunkCountAggregateInputType;
    _avg?: CodeChunkAvgAggregateInputType;
    _sum?: CodeChunkSumAggregateInputType;
    _min?: CodeChunkMinAggregateInputType;
    _max?: CodeChunkMaxAggregateInputType;
};
export type GetCodeChunkAggregateType<T extends CodeChunkAggregateArgs> = {
    [P in keyof T & keyof AggregateCodeChunk]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCodeChunk[P]> : Prisma.GetScalarType<T[P], AggregateCodeChunk[P]>;
};
export type CodeChunkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CodeChunkWhereInput;
    orderBy?: Prisma.CodeChunkOrderByWithAggregationInput | Prisma.CodeChunkOrderByWithAggregationInput[];
    by: Prisma.CodeChunkScalarFieldEnum[] | Prisma.CodeChunkScalarFieldEnum;
    having?: Prisma.CodeChunkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CodeChunkCountAggregateInputType | true;
    _avg?: CodeChunkAvgAggregateInputType;
    _sum?: CodeChunkSumAggregateInputType;
    _min?: CodeChunkMinAggregateInputType;
    _max?: CodeChunkMaxAggregateInputType;
};
export type CodeChunkGroupByOutputType = {
    id: string;
    repositoryFileId: string;
    chunkIndex: number;
    content: string;
    startLine: number;
    endLine: number;
    createdAt: Date;
    _count: CodeChunkCountAggregateOutputType | null;
    _avg: CodeChunkAvgAggregateOutputType | null;
    _sum: CodeChunkSumAggregateOutputType | null;
    _min: CodeChunkMinAggregateOutputType | null;
    _max: CodeChunkMaxAggregateOutputType | null;
};
export type GetCodeChunkGroupByPayload<T extends CodeChunkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CodeChunkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CodeChunkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CodeChunkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CodeChunkGroupByOutputType[P]>;
}>>;
export type CodeChunkWhereInput = {
    AND?: Prisma.CodeChunkWhereInput | Prisma.CodeChunkWhereInput[];
    OR?: Prisma.CodeChunkWhereInput[];
    NOT?: Prisma.CodeChunkWhereInput | Prisma.CodeChunkWhereInput[];
    id?: Prisma.StringFilter<"CodeChunk"> | string;
    repositoryFileId?: Prisma.StringFilter<"CodeChunk"> | string;
    chunkIndex?: Prisma.IntFilter<"CodeChunk"> | number;
    content?: Prisma.StringFilter<"CodeChunk"> | string;
    startLine?: Prisma.IntFilter<"CodeChunk"> | number;
    endLine?: Prisma.IntFilter<"CodeChunk"> | number;
    createdAt?: Prisma.DateTimeFilter<"CodeChunk"> | Date | string;
    repositoryFile?: Prisma.XOR<Prisma.RepositoryFileScalarRelationFilter, Prisma.RepositoryFileWhereInput>;
};
export type CodeChunkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    repositoryFileId?: Prisma.SortOrder;
    chunkIndex?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    startLine?: Prisma.SortOrder;
    endLine?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    repositoryFile?: Prisma.RepositoryFileOrderByWithRelationInput;
};
export type CodeChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    repositoryFileId_chunkIndex?: Prisma.CodeChunkRepositoryFileIdChunkIndexCompoundUniqueInput;
    AND?: Prisma.CodeChunkWhereInput | Prisma.CodeChunkWhereInput[];
    OR?: Prisma.CodeChunkWhereInput[];
    NOT?: Prisma.CodeChunkWhereInput | Prisma.CodeChunkWhereInput[];
    repositoryFileId?: Prisma.StringFilter<"CodeChunk"> | string;
    chunkIndex?: Prisma.IntFilter<"CodeChunk"> | number;
    content?: Prisma.StringFilter<"CodeChunk"> | string;
    startLine?: Prisma.IntFilter<"CodeChunk"> | number;
    endLine?: Prisma.IntFilter<"CodeChunk"> | number;
    createdAt?: Prisma.DateTimeFilter<"CodeChunk"> | Date | string;
    repositoryFile?: Prisma.XOR<Prisma.RepositoryFileScalarRelationFilter, Prisma.RepositoryFileWhereInput>;
}, "id" | "repositoryFileId_chunkIndex">;
export type CodeChunkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    repositoryFileId?: Prisma.SortOrder;
    chunkIndex?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    startLine?: Prisma.SortOrder;
    endLine?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CodeChunkCountOrderByAggregateInput;
    _avg?: Prisma.CodeChunkAvgOrderByAggregateInput;
    _max?: Prisma.CodeChunkMaxOrderByAggregateInput;
    _min?: Prisma.CodeChunkMinOrderByAggregateInput;
    _sum?: Prisma.CodeChunkSumOrderByAggregateInput;
};
export type CodeChunkScalarWhereWithAggregatesInput = {
    AND?: Prisma.CodeChunkScalarWhereWithAggregatesInput | Prisma.CodeChunkScalarWhereWithAggregatesInput[];
    OR?: Prisma.CodeChunkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CodeChunkScalarWhereWithAggregatesInput | Prisma.CodeChunkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CodeChunk"> | string;
    repositoryFileId?: Prisma.StringWithAggregatesFilter<"CodeChunk"> | string;
    chunkIndex?: Prisma.IntWithAggregatesFilter<"CodeChunk"> | number;
    content?: Prisma.StringWithAggregatesFilter<"CodeChunk"> | string;
    startLine?: Prisma.IntWithAggregatesFilter<"CodeChunk"> | number;
    endLine?: Prisma.IntWithAggregatesFilter<"CodeChunk"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CodeChunk"> | Date | string;
};
export type CodeChunkCreateInput = {
    id?: string;
    chunkIndex: number;
    content: string;
    startLine: number;
    endLine: number;
    createdAt?: Date | string;
    repositoryFile: Prisma.RepositoryFileCreateNestedOneWithoutChunksInput;
};
export type CodeChunkUncheckedCreateInput = {
    id?: string;
    repositoryFileId: string;
    chunkIndex: number;
    content: string;
    startLine: number;
    endLine: number;
    createdAt?: Date | string;
};
export type CodeChunkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    startLine?: Prisma.IntFieldUpdateOperationsInput | number;
    endLine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repositoryFile?: Prisma.RepositoryFileUpdateOneRequiredWithoutChunksNestedInput;
};
export type CodeChunkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repositoryFileId?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    startLine?: Prisma.IntFieldUpdateOperationsInput | number;
    endLine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CodeChunkCreateManyInput = {
    id?: string;
    repositoryFileId: string;
    chunkIndex: number;
    content: string;
    startLine: number;
    endLine: number;
    createdAt?: Date | string;
};
export type CodeChunkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    startLine?: Prisma.IntFieldUpdateOperationsInput | number;
    endLine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CodeChunkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repositoryFileId?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    startLine?: Prisma.IntFieldUpdateOperationsInput | number;
    endLine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CodeChunkListRelationFilter = {
    every?: Prisma.CodeChunkWhereInput;
    some?: Prisma.CodeChunkWhereInput;
    none?: Prisma.CodeChunkWhereInput;
};
export type CodeChunkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CodeChunkRepositoryFileIdChunkIndexCompoundUniqueInput = {
    repositoryFileId: string;
    chunkIndex: number;
};
export type CodeChunkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repositoryFileId?: Prisma.SortOrder;
    chunkIndex?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    startLine?: Prisma.SortOrder;
    endLine?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CodeChunkAvgOrderByAggregateInput = {
    chunkIndex?: Prisma.SortOrder;
    startLine?: Prisma.SortOrder;
    endLine?: Prisma.SortOrder;
};
export type CodeChunkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repositoryFileId?: Prisma.SortOrder;
    chunkIndex?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    startLine?: Prisma.SortOrder;
    endLine?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CodeChunkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repositoryFileId?: Prisma.SortOrder;
    chunkIndex?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    startLine?: Prisma.SortOrder;
    endLine?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CodeChunkSumOrderByAggregateInput = {
    chunkIndex?: Prisma.SortOrder;
    startLine?: Prisma.SortOrder;
    endLine?: Prisma.SortOrder;
};
export type CodeChunkCreateNestedManyWithoutRepositoryFileInput = {
    create?: Prisma.XOR<Prisma.CodeChunkCreateWithoutRepositoryFileInput, Prisma.CodeChunkUncheckedCreateWithoutRepositoryFileInput> | Prisma.CodeChunkCreateWithoutRepositoryFileInput[] | Prisma.CodeChunkUncheckedCreateWithoutRepositoryFileInput[];
    connectOrCreate?: Prisma.CodeChunkCreateOrConnectWithoutRepositoryFileInput | Prisma.CodeChunkCreateOrConnectWithoutRepositoryFileInput[];
    createMany?: Prisma.CodeChunkCreateManyRepositoryFileInputEnvelope;
    connect?: Prisma.CodeChunkWhereUniqueInput | Prisma.CodeChunkWhereUniqueInput[];
};
export type CodeChunkUncheckedCreateNestedManyWithoutRepositoryFileInput = {
    create?: Prisma.XOR<Prisma.CodeChunkCreateWithoutRepositoryFileInput, Prisma.CodeChunkUncheckedCreateWithoutRepositoryFileInput> | Prisma.CodeChunkCreateWithoutRepositoryFileInput[] | Prisma.CodeChunkUncheckedCreateWithoutRepositoryFileInput[];
    connectOrCreate?: Prisma.CodeChunkCreateOrConnectWithoutRepositoryFileInput | Prisma.CodeChunkCreateOrConnectWithoutRepositoryFileInput[];
    createMany?: Prisma.CodeChunkCreateManyRepositoryFileInputEnvelope;
    connect?: Prisma.CodeChunkWhereUniqueInput | Prisma.CodeChunkWhereUniqueInput[];
};
export type CodeChunkUpdateManyWithoutRepositoryFileNestedInput = {
    create?: Prisma.XOR<Prisma.CodeChunkCreateWithoutRepositoryFileInput, Prisma.CodeChunkUncheckedCreateWithoutRepositoryFileInput> | Prisma.CodeChunkCreateWithoutRepositoryFileInput[] | Prisma.CodeChunkUncheckedCreateWithoutRepositoryFileInput[];
    connectOrCreate?: Prisma.CodeChunkCreateOrConnectWithoutRepositoryFileInput | Prisma.CodeChunkCreateOrConnectWithoutRepositoryFileInput[];
    upsert?: Prisma.CodeChunkUpsertWithWhereUniqueWithoutRepositoryFileInput | Prisma.CodeChunkUpsertWithWhereUniqueWithoutRepositoryFileInput[];
    createMany?: Prisma.CodeChunkCreateManyRepositoryFileInputEnvelope;
    set?: Prisma.CodeChunkWhereUniqueInput | Prisma.CodeChunkWhereUniqueInput[];
    disconnect?: Prisma.CodeChunkWhereUniqueInput | Prisma.CodeChunkWhereUniqueInput[];
    delete?: Prisma.CodeChunkWhereUniqueInput | Prisma.CodeChunkWhereUniqueInput[];
    connect?: Prisma.CodeChunkWhereUniqueInput | Prisma.CodeChunkWhereUniqueInput[];
    update?: Prisma.CodeChunkUpdateWithWhereUniqueWithoutRepositoryFileInput | Prisma.CodeChunkUpdateWithWhereUniqueWithoutRepositoryFileInput[];
    updateMany?: Prisma.CodeChunkUpdateManyWithWhereWithoutRepositoryFileInput | Prisma.CodeChunkUpdateManyWithWhereWithoutRepositoryFileInput[];
    deleteMany?: Prisma.CodeChunkScalarWhereInput | Prisma.CodeChunkScalarWhereInput[];
};
export type CodeChunkUncheckedUpdateManyWithoutRepositoryFileNestedInput = {
    create?: Prisma.XOR<Prisma.CodeChunkCreateWithoutRepositoryFileInput, Prisma.CodeChunkUncheckedCreateWithoutRepositoryFileInput> | Prisma.CodeChunkCreateWithoutRepositoryFileInput[] | Prisma.CodeChunkUncheckedCreateWithoutRepositoryFileInput[];
    connectOrCreate?: Prisma.CodeChunkCreateOrConnectWithoutRepositoryFileInput | Prisma.CodeChunkCreateOrConnectWithoutRepositoryFileInput[];
    upsert?: Prisma.CodeChunkUpsertWithWhereUniqueWithoutRepositoryFileInput | Prisma.CodeChunkUpsertWithWhereUniqueWithoutRepositoryFileInput[];
    createMany?: Prisma.CodeChunkCreateManyRepositoryFileInputEnvelope;
    set?: Prisma.CodeChunkWhereUniqueInput | Prisma.CodeChunkWhereUniqueInput[];
    disconnect?: Prisma.CodeChunkWhereUniqueInput | Prisma.CodeChunkWhereUniqueInput[];
    delete?: Prisma.CodeChunkWhereUniqueInput | Prisma.CodeChunkWhereUniqueInput[];
    connect?: Prisma.CodeChunkWhereUniqueInput | Prisma.CodeChunkWhereUniqueInput[];
    update?: Prisma.CodeChunkUpdateWithWhereUniqueWithoutRepositoryFileInput | Prisma.CodeChunkUpdateWithWhereUniqueWithoutRepositoryFileInput[];
    updateMany?: Prisma.CodeChunkUpdateManyWithWhereWithoutRepositoryFileInput | Prisma.CodeChunkUpdateManyWithWhereWithoutRepositoryFileInput[];
    deleteMany?: Prisma.CodeChunkScalarWhereInput | Prisma.CodeChunkScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CodeChunkCreateWithoutRepositoryFileInput = {
    id?: string;
    chunkIndex: number;
    content: string;
    startLine: number;
    endLine: number;
    createdAt?: Date | string;
};
export type CodeChunkUncheckedCreateWithoutRepositoryFileInput = {
    id?: string;
    chunkIndex: number;
    content: string;
    startLine: number;
    endLine: number;
    createdAt?: Date | string;
};
export type CodeChunkCreateOrConnectWithoutRepositoryFileInput = {
    where: Prisma.CodeChunkWhereUniqueInput;
    create: Prisma.XOR<Prisma.CodeChunkCreateWithoutRepositoryFileInput, Prisma.CodeChunkUncheckedCreateWithoutRepositoryFileInput>;
};
export type CodeChunkCreateManyRepositoryFileInputEnvelope = {
    data: Prisma.CodeChunkCreateManyRepositoryFileInput | Prisma.CodeChunkCreateManyRepositoryFileInput[];
    skipDuplicates?: boolean;
};
export type CodeChunkUpsertWithWhereUniqueWithoutRepositoryFileInput = {
    where: Prisma.CodeChunkWhereUniqueInput;
    update: Prisma.XOR<Prisma.CodeChunkUpdateWithoutRepositoryFileInput, Prisma.CodeChunkUncheckedUpdateWithoutRepositoryFileInput>;
    create: Prisma.XOR<Prisma.CodeChunkCreateWithoutRepositoryFileInput, Prisma.CodeChunkUncheckedCreateWithoutRepositoryFileInput>;
};
export type CodeChunkUpdateWithWhereUniqueWithoutRepositoryFileInput = {
    where: Prisma.CodeChunkWhereUniqueInput;
    data: Prisma.XOR<Prisma.CodeChunkUpdateWithoutRepositoryFileInput, Prisma.CodeChunkUncheckedUpdateWithoutRepositoryFileInput>;
};
export type CodeChunkUpdateManyWithWhereWithoutRepositoryFileInput = {
    where: Prisma.CodeChunkScalarWhereInput;
    data: Prisma.XOR<Prisma.CodeChunkUpdateManyMutationInput, Prisma.CodeChunkUncheckedUpdateManyWithoutRepositoryFileInput>;
};
export type CodeChunkScalarWhereInput = {
    AND?: Prisma.CodeChunkScalarWhereInput | Prisma.CodeChunkScalarWhereInput[];
    OR?: Prisma.CodeChunkScalarWhereInput[];
    NOT?: Prisma.CodeChunkScalarWhereInput | Prisma.CodeChunkScalarWhereInput[];
    id?: Prisma.StringFilter<"CodeChunk"> | string;
    repositoryFileId?: Prisma.StringFilter<"CodeChunk"> | string;
    chunkIndex?: Prisma.IntFilter<"CodeChunk"> | number;
    content?: Prisma.StringFilter<"CodeChunk"> | string;
    startLine?: Prisma.IntFilter<"CodeChunk"> | number;
    endLine?: Prisma.IntFilter<"CodeChunk"> | number;
    createdAt?: Prisma.DateTimeFilter<"CodeChunk"> | Date | string;
};
export type CodeChunkCreateManyRepositoryFileInput = {
    id?: string;
    chunkIndex: number;
    content: string;
    startLine: number;
    endLine: number;
    createdAt?: Date | string;
};
export type CodeChunkUpdateWithoutRepositoryFileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    startLine?: Prisma.IntFieldUpdateOperationsInput | number;
    endLine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CodeChunkUncheckedUpdateWithoutRepositoryFileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    startLine?: Prisma.IntFieldUpdateOperationsInput | number;
    endLine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CodeChunkUncheckedUpdateManyWithoutRepositoryFileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    startLine?: Prisma.IntFieldUpdateOperationsInput | number;
    endLine?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CodeChunkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repositoryFileId?: boolean;
    chunkIndex?: boolean;
    content?: boolean;
    startLine?: boolean;
    endLine?: boolean;
    createdAt?: boolean;
    repositoryFile?: boolean | Prisma.RepositoryFileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["codeChunk"]>;
export type CodeChunkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repositoryFileId?: boolean;
    chunkIndex?: boolean;
    content?: boolean;
    startLine?: boolean;
    endLine?: boolean;
    createdAt?: boolean;
    repositoryFile?: boolean | Prisma.RepositoryFileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["codeChunk"]>;
export type CodeChunkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repositoryFileId?: boolean;
    chunkIndex?: boolean;
    content?: boolean;
    startLine?: boolean;
    endLine?: boolean;
    createdAt?: boolean;
    repositoryFile?: boolean | Prisma.RepositoryFileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["codeChunk"]>;
export type CodeChunkSelectScalar = {
    id?: boolean;
    repositoryFileId?: boolean;
    chunkIndex?: boolean;
    content?: boolean;
    startLine?: boolean;
    endLine?: boolean;
    createdAt?: boolean;
};
export type CodeChunkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "repositoryFileId" | "chunkIndex" | "content" | "startLine" | "endLine" | "createdAt", ExtArgs["result"]["codeChunk"]>;
export type CodeChunkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repositoryFile?: boolean | Prisma.RepositoryFileDefaultArgs<ExtArgs>;
};
export type CodeChunkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repositoryFile?: boolean | Prisma.RepositoryFileDefaultArgs<ExtArgs>;
};
export type CodeChunkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repositoryFile?: boolean | Prisma.RepositoryFileDefaultArgs<ExtArgs>;
};
export type $CodeChunkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CodeChunk";
    objects: {
        repositoryFile: Prisma.$RepositoryFilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        repositoryFileId: string;
        chunkIndex: number;
        content: string;
        startLine: number;
        endLine: number;
        createdAt: Date;
    }, ExtArgs["result"]["codeChunk"]>;
    composites: {};
};
export type CodeChunkGetPayload<S extends boolean | null | undefined | CodeChunkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload, S>;
export type CodeChunkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CodeChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CodeChunkCountAggregateInputType | true;
};
export interface CodeChunkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CodeChunk'];
        meta: {
            name: 'CodeChunk';
        };
    };
    findUnique<T extends CodeChunkFindUniqueArgs>(args: Prisma.SelectSubset<T, CodeChunkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CodeChunkClient<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CodeChunkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CodeChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CodeChunkClient<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CodeChunkFindFirstArgs>(args?: Prisma.SelectSubset<T, CodeChunkFindFirstArgs<ExtArgs>>): Prisma.Prisma__CodeChunkClient<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CodeChunkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CodeChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CodeChunkClient<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CodeChunkFindManyArgs>(args?: Prisma.SelectSubset<T, CodeChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CodeChunkCreateArgs>(args: Prisma.SelectSubset<T, CodeChunkCreateArgs<ExtArgs>>): Prisma.Prisma__CodeChunkClient<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CodeChunkCreateManyArgs>(args?: Prisma.SelectSubset<T, CodeChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CodeChunkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CodeChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CodeChunkDeleteArgs>(args: Prisma.SelectSubset<T, CodeChunkDeleteArgs<ExtArgs>>): Prisma.Prisma__CodeChunkClient<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CodeChunkUpdateArgs>(args: Prisma.SelectSubset<T, CodeChunkUpdateArgs<ExtArgs>>): Prisma.Prisma__CodeChunkClient<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CodeChunkDeleteManyArgs>(args?: Prisma.SelectSubset<T, CodeChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CodeChunkUpdateManyArgs>(args: Prisma.SelectSubset<T, CodeChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CodeChunkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CodeChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CodeChunkUpsertArgs>(args: Prisma.SelectSubset<T, CodeChunkUpsertArgs<ExtArgs>>): Prisma.Prisma__CodeChunkClient<runtime.Types.Result.GetResult<Prisma.$CodeChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CodeChunkCountArgs>(args?: Prisma.Subset<T, CodeChunkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CodeChunkCountAggregateOutputType> : number>;
    aggregate<T extends CodeChunkAggregateArgs>(args: Prisma.Subset<T, CodeChunkAggregateArgs>): Prisma.PrismaPromise<GetCodeChunkAggregateType<T>>;
    groupBy<T extends CodeChunkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CodeChunkGroupByArgs['orderBy'];
    } : {
        orderBy?: CodeChunkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CodeChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CodeChunkFieldRefs;
}
export interface Prisma__CodeChunkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    repositoryFile<T extends Prisma.RepositoryFileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RepositoryFileDefaultArgs<ExtArgs>>): Prisma.Prisma__RepositoryFileClient<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CodeChunkFieldRefs {
    readonly id: Prisma.FieldRef<"CodeChunk", 'String'>;
    readonly repositoryFileId: Prisma.FieldRef<"CodeChunk", 'String'>;
    readonly chunkIndex: Prisma.FieldRef<"CodeChunk", 'Int'>;
    readonly content: Prisma.FieldRef<"CodeChunk", 'String'>;
    readonly startLine: Prisma.FieldRef<"CodeChunk", 'Int'>;
    readonly endLine: Prisma.FieldRef<"CodeChunk", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"CodeChunk", 'DateTime'>;
}
export type CodeChunkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelect<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    include?: Prisma.CodeChunkInclude<ExtArgs> | null;
    where: Prisma.CodeChunkWhereUniqueInput;
};
export type CodeChunkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelect<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    include?: Prisma.CodeChunkInclude<ExtArgs> | null;
    where: Prisma.CodeChunkWhereUniqueInput;
};
export type CodeChunkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelect<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    include?: Prisma.CodeChunkInclude<ExtArgs> | null;
    where?: Prisma.CodeChunkWhereInput;
    orderBy?: Prisma.CodeChunkOrderByWithRelationInput | Prisma.CodeChunkOrderByWithRelationInput[];
    cursor?: Prisma.CodeChunkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CodeChunkScalarFieldEnum | Prisma.CodeChunkScalarFieldEnum[];
};
export type CodeChunkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelect<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    include?: Prisma.CodeChunkInclude<ExtArgs> | null;
    where?: Prisma.CodeChunkWhereInput;
    orderBy?: Prisma.CodeChunkOrderByWithRelationInput | Prisma.CodeChunkOrderByWithRelationInput[];
    cursor?: Prisma.CodeChunkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CodeChunkScalarFieldEnum | Prisma.CodeChunkScalarFieldEnum[];
};
export type CodeChunkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelect<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    include?: Prisma.CodeChunkInclude<ExtArgs> | null;
    where?: Prisma.CodeChunkWhereInput;
    orderBy?: Prisma.CodeChunkOrderByWithRelationInput | Prisma.CodeChunkOrderByWithRelationInput[];
    cursor?: Prisma.CodeChunkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CodeChunkScalarFieldEnum | Prisma.CodeChunkScalarFieldEnum[];
};
export type CodeChunkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelect<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    include?: Prisma.CodeChunkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CodeChunkCreateInput, Prisma.CodeChunkUncheckedCreateInput>;
};
export type CodeChunkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CodeChunkCreateManyInput | Prisma.CodeChunkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CodeChunkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    data: Prisma.CodeChunkCreateManyInput | Prisma.CodeChunkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CodeChunkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CodeChunkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelect<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    include?: Prisma.CodeChunkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CodeChunkUpdateInput, Prisma.CodeChunkUncheckedUpdateInput>;
    where: Prisma.CodeChunkWhereUniqueInput;
};
export type CodeChunkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CodeChunkUpdateManyMutationInput, Prisma.CodeChunkUncheckedUpdateManyInput>;
    where?: Prisma.CodeChunkWhereInput;
    limit?: number;
};
export type CodeChunkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CodeChunkUpdateManyMutationInput, Prisma.CodeChunkUncheckedUpdateManyInput>;
    where?: Prisma.CodeChunkWhereInput;
    limit?: number;
    include?: Prisma.CodeChunkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CodeChunkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelect<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    include?: Prisma.CodeChunkInclude<ExtArgs> | null;
    where: Prisma.CodeChunkWhereUniqueInput;
    create: Prisma.XOR<Prisma.CodeChunkCreateInput, Prisma.CodeChunkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CodeChunkUpdateInput, Prisma.CodeChunkUncheckedUpdateInput>;
};
export type CodeChunkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelect<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    include?: Prisma.CodeChunkInclude<ExtArgs> | null;
    where: Prisma.CodeChunkWhereUniqueInput;
};
export type CodeChunkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CodeChunkWhereInput;
    limit?: number;
};
export type CodeChunkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CodeChunkSelect<ExtArgs> | null;
    omit?: Prisma.CodeChunkOmit<ExtArgs> | null;
    include?: Prisma.CodeChunkInclude<ExtArgs> | null;
};
